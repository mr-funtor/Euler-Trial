function namesScore(arr){
    
    let lettersArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    let allSum=0
    
    //sort the array in alphabetical number
    arr=arr.sort();
    
    arr.map((item,index)=>{
        
        let letterSum=0;
        
      for(let i=0; i<item.length;i++){
         let letterNum= lettersArray.indexOf(item[i].toUpperCase())+1;//gets the index of the letters 
         
          letterSum+=letterNum
      }  
        
        allSum+=letterSum*(index+1)//multiply the total number of th word with it's present position
    
    })
    

    console.log(allSum)
}

const test1=['THIS', 'IS', 'ONLY', 'A', 'TEST']
const test2=['I','REPEAT','THIS','IS','ONLY','A','TEST'];

namesScore(test2)

