const express = require('express');
const router = express.Router();
const {authenticateToken, authorizationRole} = require('../authFunctions')
const {apiRequest} = require('../commonFunctions')
const { URL_USERS } = require('../constants');
const rp = require('request-promise')


// this method are allowed to all role access 
router.get('/id/:id', authenticateToken, (req, res) => {
    if(req.params.id === undefined ) res.statusCode(403);
    apiRequest(req,res,userById,URL_USERS);
});

// this method are allowed to all role access 
router.get('/name/:name', authenticateToken, (req, res) => {
    if(req.params.name === undefined ) res.sendStatus(403);
    apiRequest(req,res,userByNames,URL_USERS);
});

function userByNames(req,res,response){
    let userFiltered = response.clients.filter( us => us.name === req.params.name );
    res.json(userFiltered);
}

function userById(req,res,response){
    let userFiltered = response.clients.filter( us => us.id === req.params.id );
    res.json(userFiltered);
}

module.exports = router;