
const { URL_ROLES, CODE_NUM_FORBIDDEN, CODE_NUM_UNAUTHORIZED,CODE_NUM_NOT_ACCEPTABLE } = require('../utils/constants')
const jwt = require('jsonwebtoken')
const rp = require('request-promise');

let refreshTokens = [];

exports.login = (req, res) => {

    // Authenticate User
    const username = req.body.username
    const email = req.body.email
    let user = { 
        name: username,
        email: email,
        role: '',
        id: ''
    }
    
    // TODO MANEJO DE ERRORES UNIFICAR CRITERIOS CON EL RESTO
    let options = {
        uri: URL_ROLES,
        headers: {'User-Agent': 'Request-Promise' },
        json: true
    }

    // TODO USE LOADASH for user object
    rp(options).then(function(response){
        let data=response;
        userFiltered = data.clients.filter( us => us.name ===  username );
        user.role =  userFiltered[0].role;
        user.id = userFiltered[0].id;      
        const accessToken = generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        refreshTokens.push(refreshToken)
        res.json({ accessToken: accessToken, refreshToken: refreshToken })

    }).catch(function(error){
        console.log('error:', error);
        // console.log('statusCode:', response && response.statusCode); 
        res.sendStatus(CODE_NUM_NOT_ACCEPTABLE);
    })

}

exports.refreshToken = (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(CODE_NUM_UNAUTHORIZED)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(CODE_NUM_FORBIDDEN)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(CODE_NUM_FORBIDDEN)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
}


exports.logout = (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(CODE_NUM_SUCCESSFUL)
}


function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES }) // standard could be 15m
}