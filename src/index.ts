#!/usr/bin/env node

// Imports
import program from 'commander'
import chalk from 'chalk'

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

