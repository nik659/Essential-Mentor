var express = require('express');
var router = express.Router();
var ContactCollection = require('../Model/contact');
router.post('/addcontact', (req, res) => {
    var ac = new ContactCollection(req.body);
    ac.save();
    res.status(201).send(ac);
});


router.get('/viewcontact', (req, res) => {
    ContactCollection.find({}, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

router.delete('/deleterecord/:id', (req, res) => {
    ContactCollection.findByIdAndDelete({ _id: req.params.id },
        (err, data) => {
            res.json({ data });
        });
});
module.exports = router;