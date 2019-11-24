var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Name:{type: String},
    Email:{type: String},
    Subject:{type: String},
    Message:{type: String},
    
});
module.exports= mongoose.model('ContactCollection',obj);