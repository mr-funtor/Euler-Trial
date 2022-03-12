function primes(n) {

    let array = [2];

    for(let i=3; i<=n; i++){

      if(Math.pow(2,i)%i===2){

        array.push(i)

      }

    }

	console.log(array);

      return array;

    }

   

    primes(1000);