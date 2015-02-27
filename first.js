function sum(values) {
	var total = 0;
	values.map(function (value) {
		total += value;
	});
	return total;
}

var numbersToSum = [1, 2, 3];
console.log(sum(numbersToSum));
