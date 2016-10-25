#! /usr/bin/env node

/* jshint esversion: 6 */

var cpr = require('cpr');

const src = process.argv[2] || '';
const regex = new RegExp(process.argv[3]) || /./;
const target = process.argv[4] || 'target';

cpr(src, target, {
  overwrite: true,
  filter: (f) => regex.test(f)
}, (err, files) => {
  if (err) throw err;
  console.log(files);
});
