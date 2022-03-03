function powerDigitSum(exponent){
	let arr=[2];
	
	for(let i=0; i<exponent-1; i++){
		let setOverTen=false;
		for(let j=0; j<arr.length; j++){
			const newValue =arr[j] *2 + (setOverTen? 1:0);
			
			arr[j]=newValue;
			if(newValue>9){
				arr[j]=arr[j]%10;
				setOverTen=true;
			}else{
				setOverTen=false;
			}
		}
		
		if(setOverTen){
			arr.push(1);
		}
	}
	
//	console.log(arr);
	return console.log(arr.reduce((sum,number)=>sum+=number,0));
	
	
}

powerDigitSum(1000)