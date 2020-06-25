const common_f = require('../utils/commonFunctions')
const { URL_USERS, CODE_NUM_FORBIDDEN } = require('../utils/constants');

exports.getUserById = (req, res) => {
        if(req.params.id === undefined ) res.statusCode(CODE_NUM_FORBIDDEN);
        common_f.apiRequest(req,res,userById,URL_USERS);
    }

exports.getUserByName = (req, res) => {
    if(req.params.name === undefined ) res.sendStatus(CODE_NUM_FORBIDDEN);
    common_f.apiRequest(req,res,userByNames,URL_USERS);
}

userByNames = (req,res,response) => {
    let userFiltered = response.clients.filter( us => us.name === req.params.name );
    res.json(userFiltered);
}

userById = (req,res,response) => {
    let userFiltered = response.clients.filter( us => us.id === req.params.id );
    res.json(userFiltered);
}


