function gridRoutes(n){
	let totalRoutes=calcRoutes(n,n);
	console.log(totalRoutes)
}

function calcRoutes(x,y,memo={}){
	const key=`${x},${y}`;
const key2=`${y},${x}`;
	
	
	
	if(key in memo)return memo[key];
	if(key2 in memo)return memo[key2];
	
	if(x===0 && y===0)return 1;
	if(x===0 ){
			memo[key2]=calcRoutes(0,y-1,memo);
		return memo[key]=calcRoutes(0,y-1,memo);
	}else if(y===0){
			memo[key2]=calcRoutes(x-1,0,memo)
		return memo[key]=calcRoutes(x-1,0,memo)
	}
	// console.log(memo)
	
	memo[key]=calcRoutes(x-1,y,memo)+calcRoutes(x,y-1,memo);
	
	return memo[key];
}



gridRoutes(20)