const Router = require('express').Router()
const controller = require('../2.Controller/fibonacci')

Router.post('/',controller.fibonacciFunction)



    


module.exports= Router