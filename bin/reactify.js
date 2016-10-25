#! /usr/bin/env node

/* jshint esversion: 6 */

const source_file = process.argv[2] || '';
const target_file = process.argv[3] || 'target/app.js';

const browserify = require('browserify');
const fs = require('fs');

browserify(source_file)
.transform('babelify', {presets: ['es2015', 'react']})
.bundle()
.pipe(fs.createWriteStream(target_file));
