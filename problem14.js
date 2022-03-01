function chaining(limit){
	let theNumber=2;
	let maxLength=0;
	
	for(let i=2; i<limit;i++){
		const length= getSequence(i);
		
		if(length>maxLength){
			maxLength=length;
			theNumber=i;
		}
	}
	
	console.log(theNumber);
	
	return theNumber
	
}

chaining(1000000)

function getSequence(number){
	if(number===1)return 1;
	
	let length=0;
	
	while(number !==1){
		if(number%2===0){
			number/=2;
		}else{
			number=3*number+1;
		}
		
		length++;
	}
	
	return length;
}