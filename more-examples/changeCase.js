var CaseStream = require('./CaseStream.js');
var fileSystem = require('fs');

if (process.argv.length < 4) {
	printUsageAndExit();
}

var toCase = process.argv[2];
var file = process.argv[3];

if (!isValidToCase()) {
	printUsageAndExit();
}

fileSystem.createReadStream(file, {encoding: 'utf8'})
	.pipe(new CaseStream(toCase == 'upper'))
	.pipe(process.stdout);


function printUsageAndExit() {
	console.error('Usage: node changeCase.js [upper|lower] <file>');
	process.exit(1);
}

function isValidToCase() {
	var validValues = ['lower', 'upper'];
	return (validValues.indexOf(toCase.toLowerCase()) >= 0);
}
