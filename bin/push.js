#! /usr/bin/env node

/* jshint esversion: 6 */

const fstream = require('fstream');
const tar = require('tar');
const zlib = require('zlib');
const aws = require('aws-sdk');

const tag = process.argv[2] || '';
const bucket = process.argv[3] || '';
const target = process.argv[4] || 'target';

const s3 = new aws.S3();

s3.upload({
  Bucket: bucket,
  Key: `${tag}.tar.gz`,
  Body: fstream.Reader(target).pipe(tar.Pack({fromBase: true})).pipe(zlib.Gzip())
}).
on('httpUploadProgress', (evt) => {
  console.log(evt);
}).
send((err, data) => {
  if (err) throw err;
  console.log(data.key);
});
