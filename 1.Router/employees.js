const Router = require('express').Router()
const controller = require('../2.Controller/employees')

Router.post('/',controller.InputDataEmployees)



    


module.exports= Router