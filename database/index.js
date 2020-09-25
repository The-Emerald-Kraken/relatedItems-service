const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/relatedItems';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;
