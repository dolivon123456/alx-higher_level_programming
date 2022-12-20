#!/usr/bin/node

const rargv = process.argv;

if (isNaN(rargv[2])) {
  console.log('Not a number');
} else {
  const n = parseInt(rargv[2]);
  console.log(`My number: ${n}`);
}
