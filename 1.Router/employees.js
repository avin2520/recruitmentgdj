const Router = require('express').Router()
const controller = require('../2.Controller/employees')

Router.post('/',controller.InputDataEmployees)
Router.put('/:id',controller.editDataEmployees)
Router.delete('/:id',controller.deleteEmployeeById)
Router.get('/',controller.getDataEmloyeess)



    


module.exports= Router