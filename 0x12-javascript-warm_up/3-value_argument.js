#!/usr/bin/node

const rargv = process.argv;
if (rargv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(rargv[2]);
}
