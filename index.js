#!/usr/bin/env node

/**
 * Module dependencies
 */

var generate = require('./lib/generate');

var name = process.argv[2];

if (!name) {
  return console.log('\nComponent name required\n');
}

generate(name, process.cwd())
  .then(filename => console.log(`${name} -> ${filename}`))
  .catch(error => console.log('Oops!', error));
