const db =require('../3.databases/mySql')

const fibonacci =(n)=>{
    if(Number.isInteger(n) === true){
        if (n===1) 
        {
          return [0, 1]
        } 
        else 
        {
          let fiboArr = fibonacci(n - 1)
          fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);
          return fiboArr
        }
      }else{
        return " n must be integer"
      }

}

const fibonacciFunction = (req,res)=>{
    let n = req.body.n    
    let result = fibonacci(n)
    res.send({
        error:false,
        message : "Status code 200",
        result : result
    })
}


module.exports = {
    fibonacciFunction
}