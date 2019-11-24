var mongoose=require('mongoose');
var obj=new mongoose.Schema({
    CourseName: {type : String},
    Url: {type : String},
    videoPath: {type : String},
    CourseDetails: {type : String},

});
module.exports = mongoose.model('CourseCollection',obj);