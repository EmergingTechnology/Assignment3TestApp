'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  name1: String,
  name2: String,
  name3: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);