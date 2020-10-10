const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IndexSchema = new Schema({
  // schema here
});

module.exports = Index = mongoose.model('index', IndexSchema);
