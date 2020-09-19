   
    const reverse = (character='') => {
        var char = character
        var revChar = ''
        for(var i= char.length-1 ; i >= 0 ; i--){
            var revChar = revChar + char[i]          
        }
        console.log(revChar)
    }
    
    reverse('abcde') 
   