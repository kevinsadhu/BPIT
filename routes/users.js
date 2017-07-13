var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/accountList', function(req, res) {
    var db = req.db;
    var collection = db.get('newdb');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/addAccount', function(req, res) {
    var db = req.db;
    var collection = db.get('newdb');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('newdb');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});
module.exports = router;


////

