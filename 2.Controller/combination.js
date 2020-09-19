const db =require('../3.databases/mySql')

const range = (a,b) => {
    var prd = a, i=a;
    while (i++ < b) {
      prd *= i;
    }
    return prd;
  }
  

const combinations=(n, r)=>{    
    let check1=Number.isInteger(n)
    let check2=Number.isInteger(r)
    if(check1 === true && check2 === true){
        if (n==r) 
        {
          return 1;
        } 
        else if(n>r) 
        {
          r=(r < n-r) ? n-r : r;
          return range(r+1, n)/range(1,n-r);
        }
        else if(n<r){
          return "n value must greater than r value"
        }
    }else{
        return "n and r must be integer"
    }
  }
  


const combinationFunction = (req,res)=>{
    let n = req.body.n    
    let r = req.body.r
    let result = combinations(n,r)
    res.send({
        error:false,
        message : "Status code 200",
        result : result
    })
}


module.exports = {
    combinationFunction
}