const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

const messageSchema = new MongoClient.Schema({
  content: String,
  name: String,
}, {
  timestamps: true,
});

module.exports = MongoClient.model('Message', messageSchema);