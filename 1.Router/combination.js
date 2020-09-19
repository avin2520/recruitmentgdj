const Router = require('express').Router()
const controller = require('../2.Controller/combination')

Router.post('/',controller.combinationFunction)



    


module.exports= Router