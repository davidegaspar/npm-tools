#! /usr/bin/env node

/* jshint esversion: 6 */

const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const postcss = require('postcss');
const mkdirp = require('mkdirp');

const src_file = process.argv[2] || '';
const target_file = process.argv[3] || '';

mkdirp(path.dirname(target_file), function(err) {
  if (err) {console.error(err);}
  // else console.log('pow!');
});

sass.render({
  file: src_file
}, function(err, result) {
  if (err) throw err;
  postcss([ require('autoprefixer'), require('cssnano') ])
  .process(result.css)
  .then(function (result) {
      // if ( result.map ) fs.writeFileSync('app.css.map', result.map);
      fs.writeFile(target_file, result.css, (err) => {
        if (err) throw err;
        console.log('done');
      });
  });
});
