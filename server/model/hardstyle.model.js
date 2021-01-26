const mongoose = require('mongoose');


var hardstyleSchema = mongoose.Schema ({
name: String,
singer: String,
picture: String,
genre: String
})

var Hardstyle = mongoose.model('Hardstyle', hardstyleSchema);
module.exports = Hardstyle;
