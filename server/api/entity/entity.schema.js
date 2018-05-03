'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EntitySchema = new mongoose.Schema({
  name: String
});

module.exports = EntitySchema;
