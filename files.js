var fileSystem = require('fs');
var fileCount = 0;
var dirCount = 0;
fileSystem.readdir('.', function (error, files) {
	if (error) return console.error(error);
	files.forEach(function (file) {
		var stat = fileSystem.statSync(file);
		if (stat.isFile()) fileCount++;
		if (stat.isDirectory()) dirCount++;
	});
	console.log('%d files and %d directories', fileCount, dirCount);
});
