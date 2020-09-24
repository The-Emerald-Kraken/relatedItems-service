const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/relatedItems';

const db = mongoose.connect(mongoUri);

module.export = db;