#!/usr/bin/env node

import { Command } from 'commander'
import { version } from '../package.json'
import Datext from './Datext'

const app = new Command()
// app.command('[filename]', 'file to check', 'test')
app
    .name('devbit-db')
    .usage('[options] [file]')
app
    .option('-n <number>', 'Run a specific question')
    .option('-l, --last', 'Run only the last question that has an answer', false)
    .option('-a, --all', 'Run all exercises', false)
    .option('-g, --success-only', 'Show only successful exercises', false)
    .option('-b, --fail-only', 'Show only failing exercises', false)
    .option('-s, --summary', 'Show summary only', false)
    .option('-d, --details', 'Show extra details', false)

app.version(version.toString(), '-v, --version', 'output the version')
app.helpOption('-h, --help', 'Show help about different commands')
app.parse(process.argv);

console.log(app.args)
console.log(app.opts())

const datext = new Datext({
    files: app.args as string[],
    options: app.opts()
})
