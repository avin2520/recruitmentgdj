   
    const reverse = (character='') => {
        var char = character
        var revChar = ''
        for(var i= char.length-1 ; i >= 0 ; i--){
            var revChar = revChar + char[i]          
        }
        console.log(revChar)
    }
    
    reverse('abcde') 

    const fibonacci = (n) => {
       var n1 = 0
       var n2 = 1
       var fiboArr= []


       var hasil = n1 + n2
       fiboArr.push(hasil)


       n = hasil
       console.log(n)
       
    }
    
    fibonacci(15)

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


      