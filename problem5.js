let lcmNum=0;
let numH=0;
function findTheLcm(a,b){
	findingHcf(a,b);
	lcmNum=(a*b)/numH;
}

function findingHcf(a,b){
	
	if(b===0){
		// console.log(a)
		numH=a
		return a
	}
	
	findingHcf(b,a%b);
}

function smallestMult(n){
	
	
	findTheLcm(n-1,n);

	
	while(n>=2){
		
		
		findTheLcm(lcmNum,n-1);
		
		n--;
	}
	
	return lcmNum
}

smallestMult(20)