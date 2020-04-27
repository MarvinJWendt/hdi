#!/usr/bin/env node

// Imports
import program from 'commander'
import chalk from 'chalk'
import Logic from './logic'

// Set flags
program
  .option('-d, --debug', 'output extra debugging')
  .option('-v, --verbose', 'verbose output')
  .option('-q, --quite', 'run quite - no console output')

// Parse flags
program.parse(process.argv)

// Checks
if (program.quite as boolean) {
  console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function () {}
}

if (program.debug as boolean) console.log(program.opts())
else console.debug = function () {}

// Program code
console.log(chalk.magentaBright('Hello, World!'))
console.debug("This will only be shown when the 'debug' flag is set!")

const l = new Logic() // To use non-static functions
console.log(l.hw())
console.log(l.one);
console.log(Logic.sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)) // Use static function
