function sumSquareDifference(n){
	let sumOfSquares=Math.floor( (n/6)*(n+1)*(2*n+1) )
	let squareSum= Math.pow( (n*(n+1))/2,2 );
	
	//formula gotten from https://byjus.com/maths/sum-of-n-terms/
	
	return squareSum-sumOfSquares;
	
}
sumSquareDifference(100)



