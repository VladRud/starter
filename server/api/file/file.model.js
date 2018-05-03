'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var FileSchema = new mongoose.Schema({
  originalName: String,
  path: String,
  name: String
});

module.exports = mongoose.model('File', FileSchema);
