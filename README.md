pipeline-cli
============

Workhub Pipeline Worker CLI 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pipeline-cli.svg)](https://npmjs.org/package/pipeline-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pipeline-cli.svg)](https://npmjs.org/package/pipeline-cli)
[![License](https://img.shields.io/npm/l/pipeline-cli.svg)](https://github.com/WorkerHive/pipeline-worker/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pipeline-cli
$ pipeline-cli COMMAND
running command...
$ pipeline-cli (-v|--version|version)
pipeline-cli/0.0.0 linux-x64 node-v14.0.0
$ pipeline-cli --help [COMMAND]
USAGE
  $ pipeline-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pipeline-cli hello [FILE]`](#pipeline-cli-hello-file)
* [`pipeline-cli help [COMMAND]`](#pipeline-cli-help-command)

## `pipeline-cli hello [FILE]`

describe the command here

```
USAGE
  $ pipeline-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pipeline-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/WorkerHive/pipeline-worker/blob/v0.0.0/src/commands/hello.ts)_

## `pipeline-cli help [COMMAND]`

display help for pipeline-cli

```
USAGE
  $ pipeline-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
