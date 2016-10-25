#! /usr/bin/env node

/* jshint esversion: 6 */

const tar = require('tar');
const zlib = require('zlib');
const aws = require('aws-sdk');

const tag = process.argv[2] || '';
const bucket = process.argv[3] || '';
const target = process.argv[4] || 'target';

const s3 = new aws.S3();

s3.getObject({
  Bucket: bucket,
  Key: `${tag}.tar.gz`,
}).createReadStream().pipe(zlib.Gunzip()).pipe(tar.Extract(target));
