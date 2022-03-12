function sumFactorialDigits(n){
    let arr=[1];
    
    for(let i=1; i<=n; i++){
        let overTen=0;
        
        for(let j=0; j<arr.length; j++){
            const ourValue= arr[j] * i + overTen;
            arr[j]=ourValue;
            
            if(ourValue>9){
                arr[j]=arr[j]%10;
                overTen=Math.floor(ourValue/10);
            }else{
                overTen=0;
            }
        }
        
        
        if(overTen !==0){
            while(overTen>9){
                arr.push(overTen % 10);
                overTen=Math.floor(overTen /10);
            }
            
            
            if(overTen !==0){
                arr.push(overTen);
            }
            
        }
        
    }
    
    console.log(arr.reduce((acc,item)=>acc+=item,0))
    return arr.reduce((acc,item)=>acc+=item,0);
} 


sumFactorialDigits(100)
