#! /usr/bin/env node

/* jshint esversion: 6 */

const attribute = process.argv[2] || 'name';

const pkg = require(`${process.cwd()}/package.json`);

process.stdout.write(pkg[attribute]);
