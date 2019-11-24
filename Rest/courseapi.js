var express = require('express');
var router = express.Router();
var CourseCollection = require('../model/course')
router.post('/addcourse', (req, res) => {
    var ad = new CourseCollection(req.body);
    ad.save();
    res.status(201).send(ad);
});
router.get('/viewcourse', (req, res) => {
    CourseCollection.find({}, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});
router.get('/viewcoursebyid/:id', (req, res) => {
    CourseCollection.find({ _id: req.params.id }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.delete('/deletecourse/:id', (req, res) => {
    CourseCollection.findByIdAndDelete({ _id: req.params.id },
        (err, data) => {
            res.json({ data });
        });
});

module.exports = router;