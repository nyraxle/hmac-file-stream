# hmac-file-stream

parse file content to hmac digest

## install

```npm install hmac-file-stream```

## example

``` js
var hmacFileStream = require('hmac-file-stream');
var hmac = hmacFileStream.createHmac('sha1', 'secret');

hmac.update('file-name');

hmac.digest('hex').pipe(stdout);
// Will print the hash to file content
```

## license

Dual-licensed under the MIT License or the Apache License, version 2.0