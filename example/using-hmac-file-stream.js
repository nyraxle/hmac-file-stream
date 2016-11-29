'use strict';

var fs = require('fs');
var hmacFileStream = require('../index.js');
// Using on dependencies
// var hmacFileStream = require('hmac-file-stream');

fs.writeFile(".example-file-hmac-stream", "That's a file", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("\nExample file created!");
});

var hmac = hmacFileStream.createHmac('sha1', 'secret');
hmac.update('.example-file-hmac-stream');
hmac.digest('hex').pipe(process.stdout)