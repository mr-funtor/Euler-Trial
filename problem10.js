function primeSummation(n) {
	let totalPrimes=2;
	
	let num=3;
	while(num<n){
		if(findingPrime(num)){
			totalPrimes+=num
		}
		num++
		
	}
	
	
	
	
  return totalPrimes;
}

primeSummation(2000000);

function findingPrime(n){
	if(n%2===0){
		return false;
	}
	
	for(let i=3; i<=Math.sqrt(n);i+=2){
		if(n%i===0){
			return false;
		}
	}
	
	return true;
}


