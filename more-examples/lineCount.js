var fileSystem = require('fs');

var count = 0;
var file = process.argv[2] || './dns.js';

var stream = fileSystem.createReadStream(file, {encoding: 'ascii'});

stream.on('data', function (chunk) {
	count += chunk.match(/\n/g).length;
});

stream.on('end', function () {
	console.log('%d lines in %s', count, file);
});
