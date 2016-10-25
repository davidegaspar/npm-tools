#! /usr/bin/env node

/* jshint esversion: 6 */

const rimraf = require('rimraf');

const target = process.argv[2] || 'target';

rimraf(target, (err) => {
  if (err) throw err;
  console.log('done');
});
