var Transform = require('stream').Transform;
var util = require('util');

function CaseStream(makeUpperCase) {
	this.makeUpperCase = !!makeUpperCase;
	Transform.call(this, {decodeStrings: false});
}

util.inherits(CaseStream, Transform);

CaseStream.prototype._transform = function (chunk, encoding, callback) {
	var value = encoding === 'buffer' ? chunk.toString('utf8') : chunk;
	this.push(this.makeUpperCase ? value.toUpperCase() : value.toLowerCase());
	callback();
};

module.exports = CaseStream;
