var dns = require('dns');

var domain = process.argv[2] || 'github.com';

dns.lookup(domain, function (error, address, family) {
	if (error) {
		console.error('Error looking up domain: %s', domain);
		console.error(error);
		return;
	}
	console.log('%s  %s  (IPv%d)', domain, address, family);
});
