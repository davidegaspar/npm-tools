#! /usr/bin/env node

/* jshint esversion: 6 */

const glob = require("glob");
const path = require('path');
const fs = require('fs');
const uglify = require("uglify-js");

const pattern = process.argv[2] || '';

glob(pattern, {nodir:true},(err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      var result = uglify.minify(file);
      fs.writeFile(file, result.code, (err) => {
        if (err) throw err;
        console.log(`${file} done`);
      });
    });
});
