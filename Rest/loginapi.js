var express = require('express');
var router = express.Router();
var LoginCollection = require('../Model/login');
router.post('/adddetail', (req, res) => {
    var cc = new LoginCollection(req.body);
    cc.save();
    res.status(201).send(cc);
});


router.get('/viewdetail', (req, res) => {
    LoginCollection.find({}, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});


router.post('/signin', (req, res) => {
    LoginCollection.find({ $and: [{ Name: req.body.Name }, { Password: req.body.Password }] }, (err, data) => {
        res.json({ data });
        res.status(200);
    });
});

// router.put('/updatecontact', (req, res) => {
//     ContactCollection.findById(req.body._id, (err, data) => {
//         data.Mobile = req.body.Mobile;
//         data.Message = req.body.Message;
//         data.save();
//         res.status(201).send(data);
//     });
// });

router.delete('/deletedetail/:id', (req, res) => {
    LoginCollection.findByIdAndDelete({ _id: req.params.id },
        (err, data) => {
            res.json({ data });
        });
});


module.exports = router;