var counter = require('./counter.js');

var letter = process.argv[2] || 'a';
var searchString = process.argv[3] || 'this is a test sentence';

for (var i = 0; i < searchString.length; i++) {
	if (searchString[i] === letter) {
		counter.increment();
	}
}
console.log('Found "%s" %d time(s) in "%s"', letter, counter.getCount(), searchString);
