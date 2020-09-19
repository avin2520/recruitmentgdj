   //Function Reverse Character
    const reverse = (character='') => {
      if(typeof(character)==='string'){
        var char = character
        var revChar = ''
        for(var i= char.length-1 ; i >= 0 ; i--){
            var revChar = revChar + char[i]          
        }
       return revChar
      }else{
        return 'type data must be string'
      }
    }
    
   console.log(reverse(12345))




  // Fibonacci Function
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

    console.log(fibonacci(15.5));


    
  // Math Combination Function
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
      
      
      console.log(combinations(6, 2));
      console.log(combinations(3, 3));
      console.log(combinations(3, 5));
      console.log(combinations(6.5,2));


      