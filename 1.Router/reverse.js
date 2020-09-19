const Router = require('express').Router()
const controller = require('../2.Controller/reverse')

Router.post('/',controller.reverseFunction)



    


module.exports= Router