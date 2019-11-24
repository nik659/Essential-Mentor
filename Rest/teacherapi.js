var express = require('express');
var router = express.Router();
var TeacherCollection = require('../Model/teacher');

router.post('/addteacher', (req, res) => {
    var cc = new TeacherCollection(req.body);
    cc.save();
    res.status(201).send(cc);
});


router.get('/viewteacher', (req, res) => {
    TeacherCollection.find({}, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.delete('/deleteteacher/:id', (req, res) => {
    TeacherCollection.findByIdAndDelete({ _id: req.params.id },
        (err, data) => {
            res.json({ data });
        });
});

module.exports = router;