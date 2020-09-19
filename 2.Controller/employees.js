const db =require('../3.databases/mySql')

const InputDataEmployees = (req,res)=>{
    let data = req.body
    
    let sql='insert into employees set ?;'

    db.query(sql,data,(err,result)=>{
        try{
            if(err) throw err
            console.log(result)
            res.json({
                error:false,
                message : "Status code 200",
                data : data
            })
        }catch(err){
            res.json({
                error:true,
                message:err.message
            })
        }
    })
}

const editDataEmployees = (req,res)=>{
    let data = req.body
    let id = req.params.id
    let sql = 'update employees set ? where id = ?'
    db.query(sql,[data,id],(err,result)=>{
        console.log('enter')
        try{
            if(err) throw err           
            res.json({
                error:false,
                message : 'Status code 200',
                data : data
                
            })

        }catch(err){
            res.json({
                error:true,
                message:err.message

            })
        }
    })
    
}

const deleteEmployeeById = (req,res)=>{
    let id = req.params.id
    let sql = 'delete from employees where id =?;'
    db.query(sql,id,(err,result) => {
        try{
            if(err) throw err         
                    res.json({
                        error:false,
                        message : 'Status code 204',                        
                    })
        }catch(err){
            res.json({
                error:true,
                message:err.message

            })
        }
    })
}

const getDataEmloyeess = (req,res)=>{ 
    let sql = 'select * from employees ;'

    db.query(sql,(err,result)=>{
        try{
            if(err) throw err
            res.json({
               error : false,
               message : 'Status code 200',
               data : result
                
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}

const getDataEmployeeById = (req,res)=>{
    let id = req.params.id    
    let sql = 'select * from employees where id= ?;'

    db.query(sql,id,(err,result)=>{
        try{
            if(err) throw err
            res.json({
               error : false,
               message : 'Status code 200',
               data : result
                
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}

module.exports = {
    InputDataEmployees,
    editDataEmployees,
    deleteEmployeeById,
    getDataEmloyeess,
    getDataEmployeeById
}