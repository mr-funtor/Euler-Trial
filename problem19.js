function countingSunday(firstYear, lastYear){
	let presentYear=firstYear;
	let sundaysCount=0;
	while(presentYear<=lastYear){
		for(let i=0; i<12;i++){
			const date= new Date(presentYear,i,1).getDay();//this gives us the first day of every month
			
			//checks if the first day is Sunday
			if(date===0){
				sundaysCount++;
			}
		}
		presentYear++;
	}
	
	console.log(sundaysCount);
	return sundaysCount;
}

countingSunday(1901, 2000);