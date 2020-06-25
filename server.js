
const http          = require('http');
const app           = require('./app.js')
const PORT          = process.env.PORT || 3000

http.createServer(app).listen(PORT)