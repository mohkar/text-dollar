


var number = process.argv[2]
console.log(number)
number = number.split("").reverse().join("");

function odd(n) {

	var word
	switch(n) {
		case 1: word = 'one' 
				break
		case 2: word = 'two' 
				break
		case 3: word = 'three' 
				break
		case 4: word = 'four' 
				break	
		case 5: word = 'five' 
				break	
		case 6: word = 'six' 
				break	
		case 7: word = 'seven' 
				break	
		case 8: word = 'eight' 
				break	
		case 9: word = 'nine' 
				break
	}

	return word

}

function even(n) {

	var word 
	switch(n) {
		case 2: word = 'twenty' 
				break
		case 3: word = 'thirty' 
				break
		case 4: word = 'forty' 
				break	
		case 5: word = 'fifty' 
				break	
		case 6: word = 'sixty' 
				break	
		case 7: word = 'seventy' 
				break	
		case 8: word = 'eighty' 
				break	
		case 9: word = 'ninety' 
				break
	}
	return word
}

function teens(n) {

	var word 
	switch(n) {
		case 1: word = 'eleven'
				break
		case 2: word = 'twelve' 
				break
		case 3: word = 'thirteen' 
				break
		case 4: word = 'forteen' 
				break	
		case 5: word = 'fifteen' 
				break	
		case 6: word = 'sixteen' 
				break	
		case 7: word = 'seventeen' 
				break	
		case 8: word = 'eighteen' 
				break	
		case 9: word = 'nineteen' 
				break
	}
	return word

} 

function currency(n) {
	var word 
	switch(n) {
		case 3: word = 'hundred' 
				break
		case 4:
		case 5: 
		case 6: word = 'thousand' 
				break
		case 7:
		case 8:
		case 9: word = 'million' 
				break	
		case 10:
		case 11:
		case 12: word = 'billion' 
				break	
		default: word = ''
	}
	return word
}

function calculate(number) {
	var num = number.split('')
	var word = ''
	for (var i = num.length ; i > 0; i-- ) {
		var checkForCurrency = false
		if (i % 3 == 0) {
			word += odd(Number(num[i - 1])) + ' hundred'
		} else if (i % 3 == 2) {
			if (Number(num[i - 1]) == 1) {
				word += teens(Number(num[i - 2]))
				word += " "
				i--
				checkForCurrency = true
			}
			else {
				word += even(Number(num[i - 1]))
			}
		} else {
			word += odd(Number(num[i - 1])) 
			if (i != 1)
				checkForCurrency = true
		}

		if (checkForCurrency)
			word += " " + getCurrency(i)
		word += " "
	}
	return word
}

function getCurrency(num) {
	return currency(num)
}
console.log(calculate(number))

