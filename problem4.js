
function largestPalindromeProduct(n){
	let sum;
	
	let numberLimit=Math.pow(10,n)-1;
	let left=Math.pow(10,n)-1;
	let right=Math.pow(10,n)-1;
	
	let panlidrome=[];
	
	while(left>=80){
		sum=left* right;
		
		//changing the number to a string, to an array, then reverse
		stringNum=sum.toString().split('').reverse().join('');
		stringNum=parseInt(stringNum);
		
		//pushes a found panlindrome into the array
		if(sum===stringNum){
			panlidrome.push(sum);
		}
		
		right--
		
		if(right<0){
			right=numberLimit;
			left--;
		}
	}
	
	
	//this compares which every number in the array
	//if the number is bigger, it replaces it
	let previousNum=0;
	for(let i=0; i<panlidrome.length;i++){
		let presentNum=panlidrome[i];
		if(presentNum>previousNum){
			previousNum=panlidrome[i]
			
		}
	}
	
	return previousNum
	
}
largestPalindromeProduct(3)