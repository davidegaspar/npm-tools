#! /usr/bin/env node

/* jshint esversion: 6 */

const fs = require('fs');
const mkdirp = require('mkdirp');

const tag = process.argv[2] || '';
const target = process.argv[3] || 'target';

mkdirp(target, (err) => {
  if (err) throw err;
  fs.writeFile(`${target}/version`, tag, (err) => {
    if (err) throw err;
    console.log('done');
  });
});
