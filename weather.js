var request = require('request');
var options = {
	url: 'http://api.openweathermap.org/data/2.5/weather?q=' +
	     (process.argv[2] || 'Salt Lake City, UT'),
	json: true
};
request(options, function (error, response, body) {
	if (error) return console.error('Error getting data:', error);
	console.log('Status Code: %d', response.statusCode);
	console.log('\n%s', JSON.stringify(response.headers, null, 2));
	console.log('\n%s', JSON.stringify(body, null, 2));
});
