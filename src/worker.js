const fs = require('fs').promises;
const amqplib = require('amqplib')
const ipfs = require('@workerhive/ipfs')
const dot = require('dot')

const exec = require('child_process').exec;

module.exports = async (cmd, input, output, pwd='/tmp') => {

    const cmdTemplate = dot.template(cmd)
    const inputTemplate = dot.template(input)
    const outputTemplate = dot.template(output)

    const MQ_USER = process.env.MQ_USER || "guest"
    const MQ_PASS = process.env.MQ_PASS || "guest"
    const MQ_HOST = process.env.MQ_HOST || "localhost"

    console.log(cmdTemplate({input_cid: 'test-cid', job_id: 'job-id'}))

    const node = await ipfs({Swarm: []}, process.env.WH_SWARM_KEY)

    const connection = await amqplib.connect(`amqp://${MQ_USER}:${MQ_PASS}@${MQ_HOST}`)

    const channel = await connection.createChannel();

    const inQueue = process.env.MQ_QUEUE_IN
    const outQueue = process.env.MQ_QUEUE_OUT

    await channel.assertQueue(inQueue)
    await channel.assertQueue(outQueue)

    channel.consume(inQueue, async (msg) => {
        try{
            let json = JSON.parse(msg.content.toString())
            console.info('=> Processing: ', json.input_cid)

            let inputFile = input ? inputTemplate({...json}) : `/tmp/${json.input_cid}.glb`
            let outputFile = output ? outputTemplate({...json}) : `/tmp/${json.job_id}.glb`
            
            await node.getFile(json.input_cid, inputFile)

            process.chdir(pwd || '/tmp')

            exec(
                cmdTemplate({
                    inputFile,
                    outputFile,
                    input_cid: json.input_cid,
                    job_id: json.job_id
                }),
                async (err, stdout, stderr) => {
                    if(err) {
                        channel.nack(msg)
                        return console.error(err)
                    }
            
                    console.log(err, stdout, stderr)
            
                    let data = await fs.readFile(outputFile)
                    let result = await IPFS.addFile(data)
            
                    channel.sendToQueue(
                        outQueue, 
                        Buffer.from(JSON.stringify({
                            job_id: json.job_id,
                            input_cid: result.toString()
                        }))
                    )
                    channel.ack(msg)
                })
          
        }catch(e){
            console.err(e)
        }
    })
}
