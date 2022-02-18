let right=0;
let left=[];
let i=0;
let count=2;

function largestPrimeFactor(n){
  right=n

	if(n/count===1){
		left.push(n)
		
	}else if(n%count===0 ){
		left.push(count);
		right=n/count;
		
		//using a recursion here to recall the function
		//this recreates the new right to be further broken down
		return largestPrimeFactor(right);
	}
	else if(n%count!==0 ){
		count++;
		return largestPrimeFactor(right)
	}

	console.log(left[left.length-1])
	return left[left.length-1]
	
}

largestPrimeFactor(600851475143)