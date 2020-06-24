const express = require('express');
const router = express.Router();
const authServices   = require('../../services/authServer');


// this method are allowed to all role access 
router.post('/',  authServices.refreshToken);

module.exports = router;