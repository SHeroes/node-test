const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', { title: 'Express' });
    res.send('Index PAGE');
    // res.redirect('/home')
});


module.exports = router;