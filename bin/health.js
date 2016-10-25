#! /usr/bin/env node

/* jshint esversion: 6 */

const http = require('http');

const tag = process.argv[2] || '';
const bucket = process.argv[3] || '';

var options = {
  hostname: bucket,
  port: 80,
  path: '/version',
  method: 'GET'
};

console.log(options);

var req = http.request(options, (res) => {
  var c = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => { c += chunk; });
  res.on('end', () => {
    c = c.trim();
    console.log(res.statusCode,c);
    if(res.statusCode == 200 && c === tag){
      process.exit(0);
    }else{
      process.exit(1);
    }
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
// req.write(postData);
req.end();
