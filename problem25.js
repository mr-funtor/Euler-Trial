function digitFibonacci(n){
    let fib=[1,1];
    let stopper=false;
    let count=3;
    
    while(!stopper){
      let nextNumber=  fib[fib.length-2]+fib[fib.length-1];
        fib[fib.length]=nextNumber;
        
        let seperator=nextNumber.toString().split('');

        if(seperator.length===n){
            console.log(count)
            return stopper=true;
        }
        count++;
        
    }
    
    console.log(count);
}

digitFibonacci(15)