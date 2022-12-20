#!/usr/bin/node

const rarg = process.argv.length - 2;

if (rarg == 0) {
console.log('No argument');
} else if (rarg == 1) {
console.log('Argument found');
} else {
console.log('Arguments found');
}
