function divisibleTriangleNumber(n) {
	let i=1;
	let presentTriangleNumber=i;
	let length=0;
	
	while(length<n){
		i+=1;
		presentTriangleNumber+= i;
		
		length=getDivisorsLength(presentTriangleNumber);
	}
	
	
  return presentTriangleNumber;
}


function getDivisorsLength(number){
	let length=0;
	
	for(let i=1; i<Math.sqrt(number);i++){
		if(number%i===0){
			length+=2;
		}
		
	}
	
	if(number%Math.sqrt(number)===0){
			length +=1;
		}
	
	return length
}


divisibleTriangleNumber(501);