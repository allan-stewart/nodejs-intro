var aesCmac = require('node-aes-cmac').aesCmac;

exports.createToken = function (key, data) {
	var message = data.join('|');
	var cmac = aesCmac(key, message);
	return message + '|' + cmac;
};
