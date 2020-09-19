const Router = require('express').Router()
const controller = require('../2.Controller/employees')

Router.post('/',controller.InputDataEmployees)
Router.put('/:id',controller.editDataEmployees)



    


module.exports= Router