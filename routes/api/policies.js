const express = require('express');
const router = express.Router();
const policiesControllers   = require('../../controllers/policies');
const { authenticateToken, authorizationRole } = require('../../utils/authFunctions');

router.get('/', function(req, res) {
    res.send('policies base path')
})

router.get('/users/name/:name',  authenticateToken, authorizationRole('admin'), policiesControllers.getPolicyByClientName);
router.post('/id/:id',  authenticateToken, authorizationRole('admin'), policiesControllers.setPolicyInSession);


module.exports = router;