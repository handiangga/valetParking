"use strict"

const routers = require('express').Router();

routers.get('/', (req,res)=>{
    res.render('../views/home.ejs')
})


module.exports = routers