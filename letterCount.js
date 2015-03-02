var tracker = require('./counter.js');

var letter = process.argv[2] || 'a';
var haystack = process.argv[3] || 'this is a test sentence';

for (var i = 0; i < haystack.length; i++) {
	if (haystack[i] === letter) {
		tracker.increment();
	}
}
console.log('Found "%s" %d time(s) in "%s"', letter, tracker.getCount(), haystack);
