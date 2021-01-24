const mongoose = require('mongoose');


var hardstyleSchema = mongoose.Schema ({
Name: String,
Singer: String,
Picture: String,
Genre: String
})

var Hardstyle = mongoose.model('Hardstyle', hardstyleSchema);
module.exports = Hardstyle;
