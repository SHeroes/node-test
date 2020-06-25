const common_f = require('../utils/commonFunctions')
const { URL_USERS, CODE_NUM_FORBIDDEN, URL_POLICY } = require('../utils/constants');
const { saveSessionPolicies } = require('../services/authServer');


exports.setPolicyInSession = (req,res) => {   
    if (req.params.id === undefined) {    res.json({error:'id Policy Not received'});  return }
    saveSessionPolicies(req,res);
}

exports.getPolicyByClientName = (req, res) => {
    if(req.params.name === undefined ) res.sendStatus(CODE_NUM_FORBIDDEN);
    common_f.apiRequest(req,res,policiesForClientName,URL_USERS);

}

policiesForClientName = (req,res,response) => {
    if (req.params.name === undefined) {    res.json({error:'name Not received'});  return }
    let userFiltered = response.clients.filter( us => us.name === req.params.name ).shift();    
    if (userFiltered.id === undefined) { res.json({error:'clientId Not received'});  return  }
    req.params.userFiltered = userFiltered;
    common_f.apiRequest(req,res,policiesByClientId,URL_POLICY);   

}

policiesByClientId =  (req,res,response) =>{
    if (req.params.userFiltered.id === undefined) { res.json({error:'id Not received in policiesByClientId'});  return   }
    let policies = response.policies.filter( us => us.clientId === req.params.userFiltered.id );
    res.json(policies);
}

