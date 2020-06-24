const express = require('express');
const router = express.Router();
const userControllers   = require('../../controllers/users');


router.get('/', function(req, res) {
    //res.render('index', { title: '' }   );
    res.send('users base path')
})

// this method are allowed to all role access 
router.get('/id/:id',       userControllers.getUserById);
router.get('/name/:name',   userControllers.getUserByName);


module.exports = router;