var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Name:{type: String},
    Email:{type: String},
    
    Mobile:{type:String}
});
module.exports= mongoose.model('TeacherCollection',obj);