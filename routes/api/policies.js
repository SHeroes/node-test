const express = require('express');
const router = express.Router();
const policiesControllers   = require('../../controllers/policies');
const { authenticateToken, authorizationRole } = require('../../utils/authFunctions');



router.get('/', function(req, res) {
    res.send('policies base path')
})


router.get('/users/name/:name',  policiesControllers.getPolicyByClientName);
// this method are allowed to all role access 
/*
router.get('/id/:id',       userControllers.getUserById);

*/

module.exports = router;