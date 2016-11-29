'use strict';

var hmacFile = function (algorithm, secret) {
  var hmac = require('crypto').createHmac(algorithm, secret);

  this.setEncoding = function (encoding) {
    if (typeof encoding === 'string')
      hmac.setEncoding(encoding)
  };

  this.update = function (file) {
    var rs = require('fs').createReadStream(file);

    rs.on('end', function () {
      hmac.end();
    });
  };

  var _digest = function (encoding) {
    return typeof encoding === 'string'? hmac.digest(encoding) : hmac.digest(encoding);
  };

  this.digest = function (encoding) {
    var hashDigest = _digest(encoding);
    var rs = require('stream').Readable();
    rs._read = function () {
        rs.push(hashDigest);
        rs.push(null);
    };
    return rs;
  };
};

module.exports = {
  createHmac: function (algorithm, secret) {
      return new hmacFile(algorithm, secret);
  }
}