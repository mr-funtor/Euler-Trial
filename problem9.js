function specialPythagoreanTriplet(n) {
	for(let a=1; a<=(n/3)-1;a++){
		for(let b=a+1; b<=(n/2)-1;b++){
			const c=n-b-a;
			if(findTripleSum(a,b,c) && (a+b+c===n)){
				return a*b*c;
			}
		}
	}
}


function findTripleSum(a,b,c){
	return Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)
}

specialPythagoreanTriplet(1000);