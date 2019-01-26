const express = require('express');
const route = express.Router();

let data = require('../data.json');

router.get('/',(req,resp)=>{
    res.json(data.koders)
});

module.exports = router;