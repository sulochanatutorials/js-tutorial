function ArraySum(numbers=[])
{
	var addition = 0;

	for (var index=0;index<numbers.length;index++) {
		
		// addition = addition + numbers[index];

        addition +=numbers[index];
	}
	return addition;
}

// ArrayMul([4,3,6,9,1,10,25])

function ArrayMul(numbers=[])
{
	var multiplication = 1;

	for (var index=0;index<numbers.length;index++) {
		
		
        multiplication =multiplication * numbers[index];
	}
	return multiplication;
}



function isEven(number)
{
	var remaider = number%2;

	var result;
	if(remaider==0)
	{	
		result=true;
	}else{
		result = false;
	}

	return result;
}