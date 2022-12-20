#!/usr/bin/node

const rargv = process.argv.length - 2;

if (rargv === 0) {
  console.log('No argument');
} else if (rargv === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
