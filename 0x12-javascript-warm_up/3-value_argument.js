#!/usr/bin/node

const rarg = process.argv;

if (rarg[2] == undefined) {
  console.log('No argument');
} else {
  console.log(rarg[2]);
}
