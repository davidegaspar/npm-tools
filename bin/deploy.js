#! /usr/bin/env node

/* jshint esversion: 6 */

const glob = require("glob");
const path = require('path');
const fs = require('fs');
const aws = require('aws-sdk');

const bucket = process.argv[2] || '';
const target = process.argv[3] || 'target';

const s3 = new aws.S3();

glob(`${target}/**`, {nodir:true},(err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      s3.upload({
        Bucket: bucket,
        Key: file.replace(`${target}/`,''),
        ContentType: getFileMime(file),
        Body: fs.createReadStream(file)
      }).
      // on('httpUploadProgress', function(evt) {
      //   console.log(evt);
      // }).
      send((err, data) => {
        if (err) throw err;
        console.log(data.key);
      });
    });
});

/*
  lib
*/

var getFileMime = function(filename) {
  const mime = {
    '.js': 'application/javascript',
    '.coffee': 'application/javascript',
    '.json': 'application/json',
    '.html': 'text/html',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.eot': 'application/vnd.ms-fontobject',
    '.svg': 'image/svg+xml',
    '.ttf': 'application/x-font-ttf',
    '.woff': 'application/x-font-woff',
    '.woff2': 'application/x-font-woff'
    // ignoring .gzip, .map and .md
  };
  return mime[path.extname(filename)] || 'text/plain';
}
