const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    //res.render('index', { title: '' }   );
    res.send('HOME PAGE')
})



module.exports = router;