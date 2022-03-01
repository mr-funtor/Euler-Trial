let maxProduct=0;

function largestGridProduct(allArrays) {
		let adjacentLength=4;
	
	
	
	//the first loop is for the length of the main array
	for(let i=0; i<allArrays.length;i++){
		//the inner loop is for the inner arrays
		for(let j=0; j<allArrays[i].length;j++){
			//to right
			const rightAdjacent=allArrays[i].slice(j, j+adjacentLength);
			
			
			calcMaxProduct(rightAdjacent)
			
			
			//down
			const downAdjacent=[
			allArrays[i][j], 
			allArrays[i+1] !== undefined ? allArrays[i+1][j]:1,
			allArrays[i+2] !== undefined ? allArrays[i+2][j]:1,
			allArrays[i+3] !== undefined ? allArrays[i+3][j]:1
			];
			
			calcMaxProduct(downAdjacent)
			
			//diagonal 1
			const diagonalAdjacent1=[
				allArrays[i][j], 
				allArrays[i+1] !== undefined 
					? allArrays[i+1][j+1] !== undefined
						? allArrays [i+1][j+1]:1:1  ,
				allArrays[i+2] !== undefined 
					? allArrays[i+2][j+2] !== undefined
						? allArrays [i+2][j+2]:1:1 ,
				allArrays[i+3] !== undefined 
					? allArrays[i+3][j+3] !== undefined
						? allArrays [i+3][j+3]:1:1
			];
			
			calcMaxProduct(diagonalAdjacent1)
			
			//diagonal 2
			const diagonalAdjacent2=[
			allArrays[i][j], 
				allArrays[i+1] !== undefined 
					? allArrays[i+1][j-1] !== undefined
						? allArrays [i+1][j-1]:1:1  ,
				allArrays[i+2] !== undefined 
					? allArrays[i+2][j-2] !== undefined
						? allArrays [i+2][j-2]:1:1 ,
				allArrays[i+3] !== undefined 
					? allArrays[i+3][j-3] !== undefined
						? allArrays [i+3][j-3]:1:1
			];
			
			calcMaxProduct(diagonalAdjacent2)
			
		}
		
	}
	
	
	
	
	
  return maxProduct;
}


function calcMaxProduct(newArr){
		const product= newArr.reduce((sum,number)=> sum*=number,1);
		if(product>maxProduct){
				maxProduct=product;
			}
	}