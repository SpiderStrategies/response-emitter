var IntervalStream  = require('./interval-stream')
  , fs = require('fs')
  , zlib = require('zlib')
  , is = new IntervalStream
  , es = require('event-stream')

fs.createReadStream(process.argv[2])
  .pipe(zlib.createGunzip())
  .pipe(es.split())
  .pipe(is)
  .pipe(es.map(function (data, next) {
    next(null, data.toString('utf-8') + '\n')
  }))
  .pipe(process.stdout)
