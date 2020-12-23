pipeline-worker
============

Workhub Pipeline Worker CLI 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pipeline-worker.svg)](https://npmjs.org/package/pipeline-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pipeline-worker.svg)](https://npmjs.org/package/pipeline-cli)
[![License](https://img.shields.io/npm/l/pipeline-worker.svg)](https://github.com/WorkerHive/pipeline-worker/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @workerhive/pipeline-worker
$ pipeline-worker COMMAND
running command...
$ pipeline-worker (-v|--version|version)
pipeline-worker/0.0.0 linux-x64 node-v14.0.0
$ pipeline-worker --help [COMMAND]
USAGE
  $ pipeline-worker COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pipeline-worker process`](#pipeline-worker-hello-file)
* [`pipeline-worker help [COMMAND]`](#pipeline-worker-help-command)

## `pipeline-worker process`

Run the pipeline worker in process mode, will watch an input queue from rabbitmq run the command and post the output to the out queue

```
USAGE
  $ pipeline-worker process --command [CMD] --output [OUTPUT] --input [INPUT]

OPTIONS
  --command        command template to run every message
  --input          where to write job input file, made available to command as {{=it.inputFile}}
  --output         where to find job output file, made available to command as {{=it.outputFile}}

EXAMPLE
  $ pipeline-worker process --input "/tmp/{{=it.input_cid}}" --output "/tmp/{{=it.job_id}}" --command "/usr/bin/ -i {{= it.inputFile}} -o {{= it.outputFile}" 
  processing
```

_See code: [src/commands/process.ts](https://github.com/WorkerHive/pipeline-worker/blob/v0.0.0/src/commands/process.ts)_

## `pipeline-worker help [COMMAND]`

display help for pipeline-worker

```
USAGE
  $ pipeline-worker help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
