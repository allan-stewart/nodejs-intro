function foreach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

function sum() {
	var total = 0;
	foreach(arguments, function (value) {
		total += value;
	});
	return total;
}

console.log(sum(1, 2, 3));
