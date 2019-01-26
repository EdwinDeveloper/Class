const express = require('express');
const app=express();

const mongoose = require('mongoose');

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"FondAPI"
    });
});

module.exports = app;