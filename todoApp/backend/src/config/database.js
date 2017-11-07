const mongoose = require('mongoose')
mongoose.Promise = global.Promise // remove warning message
module.exports = mongoose.connect('mongodb://localhost/todo')