function sumAmicableNum(n){
    let amicArray=[]
    
    for(let i=1;i<=n;i++){
        
        let first=getASum(i);
        let second=getASum(first)
        
        if(second===i && first!==second){
            amicArray.push(first)
            amicArray.push(second)
        }
    }
    
    amicArray=[...new Set(amicArray)]
    let theSum=amicArray.reduce((acc,item)=>acc+=item);
    
    console.log(theSum);
    
    
    
}
sumAmicableNum(10000)


//finding the divisors
function getASum(i){
    let sumArray=[]; 
    
    for(let j=1;j<=i/2;j++){
            presntNum=j;
            
            if(i%j===0){
                sumArray.push(j)
            }
        }
    
    let allSum=sumArray.reduce((acc,item)=>acc+=item,0);
    return allSum
    
}


