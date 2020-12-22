import Command, {flags} from '@oclif/command'
import Worker from '../worker';

export class ProcessCommand extends Command {
    static description = 'run cmd template every message in MQ_QUEUE_IN'

    static examples = [
      `$ pipeline-cli process --command="/usr/bin/gltfpack"
         ... processing
        `,
    ]

  static flags = {
      command: flags.string()
  }
  async run() {
    const { flags } = this.parse(ProcessCommand)

    if(flags.command){
        Worker(flags.command)
    }else{
        throw Error("No command given")
    }
   // console.log(flags, 'goodbye, world!')
  }
}