const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.json({ status: true, message: 'Index PAGE' })

});


module.exports = router;