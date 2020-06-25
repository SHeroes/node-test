const { CODE_NUM_NOT_ACCEPTABLE } = require('./constants')
const rp = require('request-promise')

// make a API REQUEST and aply _functionSelector as filter to select result
function apiRequest(req,res,_functionSelector,uri){
    rp({uri:uri,json:true}).then(function(response){
        return _functionSelector(req,res,response);
    }).catch(function(error){
        console.log('error:', error);
        res.sendStatus(CODE_NUM_NOT_ACCEPTABLE); 
    })
}

module.exports = { apiRequest }