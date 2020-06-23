require('dotenv').config()
const jwt = require('jsonwebtoken')
const request = require('request')


function authenticateToken (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

function authorizationRole(role){
    return (req,res,next) => {
        if (req.user.role !== role) {
            res.sendStatus(401);
            return res.send('Not Allowed');
        }
    }
    next();
}

function requestSimple(){
    request(URL_USERS, {json:true}, function(error, res, req, name = 'Barnett') {
        console.log('error:', error);
        console.log('statusCode:', res && res.statusCode); 
        if(res && res.statusCode==200){
            let data=req;
            console.log(data.clients.filter( user => user.name ===  name ));
    
        }
    });
}



module.exports = { authenticateToken, authorizationRole, requestSimple}
