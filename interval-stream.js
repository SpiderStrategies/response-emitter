var Transform = require('stream').Transform
  , util = require('util')

util.inherits(IntervalStream, Transform)

function IntervalStream (interval) {
  Transform.call(this)
  this.interval = interval || 1000
}

IntervalStream.prototype._transform = function (chunk, encoding, done) {
  setTimeout((function () {
    this.push(chunk)
    done()
  }).bind(this), Math.random() * this.interval)
}

module.exports = IntervalStream
