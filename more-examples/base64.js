var args = process.argv.slice(2);
var decodeFlagFound = findDecodeFlag();

if (args.length < 1) {
	printUsageAndExit();
}

var action = decodeFlagFound ? decode : encode;
var result = args.map(action);

console.log(result.join('\n'));


function findDecodeFlag() {
	var index = args.indexOf('-d');
	if (index >= 0) {
		args.splice(index, 1);
		return true;
	}
	return false;
}

function printUsageAndExit() {
	console.error('Utility for doing base64 encoding and decoding.');
	console.error();
	console.error('Usage: node base64.js [options] <input> [<input> ...]');
	console.error('Options:');
	console.error('  -d  Decode from base64.');
	process.exit(1);
}

function encode(input) {
	return new Buffer(input, 'ascii').toString('base64');
}

function decode(input) {
	return new Buffer(input, 'base64').toString('ascii');
}
