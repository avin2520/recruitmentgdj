   
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

    const product_Range = (a,b) => {
        var prd = a , i = a;
    
        while (i++ < b) {
          prd *= i;
        }
        return prd;
      }
      
      
      function combinations(n, r) 
      {
        if (n==r) 
        {
          return 1;
        } 
        else 
        {
          r=(r < n-r) ? n-r : r;
          return product_Range(r+1, n)/product_Range(1,n-r);
        }
      }
      
      
      console.log(combinations(173, 2));
      console.log(combinations(5, 3));
      console.log(combinations(3, 3));