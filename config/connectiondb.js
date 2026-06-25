
require('dotenv').config()

const mongoose = require('mongoose');

const URI = process.env.MONGO_URI
mongoose.connect(URI)

module.exports = mongoose;