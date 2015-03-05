var token = require('../tokenCreator.js');
var assert = require('assert');

describe('makeToken', function () {
	it('creates a token using aes-cmac', function () {
		var key = new Buffer('6b334d656e2a702f322e336a34616242', 'hex');
		var data = ['user123', '2015-03-13T05:30:00Z'];
		var expected = 'user123|2015-03-13T05:30:00Z|17ea924623dd6eef23d2faeb3ccd293e';
		assert.equal(token.makeToken(key, data), expected);
	});
});
