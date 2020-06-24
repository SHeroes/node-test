
const {apiRequest} = require('../commonFunctions')
const { URL_USERS, CODE_NUM_FORBIDDEN } = require('../constants');

exports.getUserById = (req, res) => {
        if(req.params.id === undefined ) res.statusCode(CODE_NUM_FORBIDDEN);
        apiRequest(req,res,userById,URL_USERS);
    }

exports.getUserByName = (req, res) => {
    if(req.params.name === undefined ) res.sendStatus(CODE_NUM_FORBIDDEN);
    apiRequest(req,res,userByNames,URL_USERS);
}

function userByNames(req,res,response){
    let userFiltered = response.clients.filter( us => us.name === req.params.name );
    res.json(userFiltered);
}

function userById(req,res,response){
    let userFiltered = response.clients.filter( us => us.id === req.params.id );
    res.json(userFiltered);
}


