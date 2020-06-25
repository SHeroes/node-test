const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.send('HOME PAGE - USELESS THIS IS AN API ')
})



module.exports = router;