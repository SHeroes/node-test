const express = require('express');
const router = express.Router();
const { authenticateToken, authorizationRole} = require('../../utils/authFunctions');
const userControllers   = require('../../controllers/users');


router.get('/', (req, res) => {
    res.send('users base path')
})

// this method are allowed to all role access 
router.get('/id/:id',       authenticateToken,      userControllers.getUserById);
router.get('/name/:name',   authenticateToken,      userControllers.getUserByName);


module.exports = router;