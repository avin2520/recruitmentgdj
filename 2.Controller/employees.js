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

module.exports = {
    InputDataEmployees
}