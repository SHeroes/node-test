const express = require('express');
const router = express.Router();
const {authenticateToken, authorizationRole} = require('../commonFunctions')
const { URL_USERS } = require('../constants');
const rp = require('request-promise')

// this method are allowed to all role access 

// this method dont exist TODO delete 
router.get('/', authenticateToken, (req,res) => {
    res.json(req.user);
    
})


// this method are allowed to all role access 
router.get('/:id', authenticateToken, (req, res) => {
    if(req.params.id === undefined ) res.statusCode(403);
    
    rp({uri:URL_USERS,json:true}).then(function(response){
        let userFiltered = response.clients.filter( us => us.id === req.params.id );
        res.json(userFiltered);
    }).catch(function(error){
        console.log('error:', error);
        res.sendStatus(406); // TODO review code errors in general
    })

});

module.exports = router;