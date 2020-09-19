const db =require('../3.databases/mySql')

const reverse = (character='') => {
    var char = character
    var revChar = ''
    for(var i= char.length-1 ; i >= 0 ; i--){
        var revChar = revChar + char[i]          
    }
    return revChar
}


const reverseFunction = (req,res)=>{
    let data = req.body.character    
    let result = reverse(data)
    res.send({
        error:false,
        message : "Status code 200",
        result : result
    })
}


module.exports = {
    reverseFunction
}