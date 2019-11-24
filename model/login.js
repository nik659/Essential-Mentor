var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Name:{type: String},
    Email:{type: String},
    Password:{type: String},
    Confirm:{type: String},
    
});
module.exports= mongoose.model('LoginCollection',obj);