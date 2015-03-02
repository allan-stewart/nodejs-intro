var count = 0;

exports.reset = function () {
	count = 0;
};
exports.increment = function () {
	count++;
};
exports.getCount = function () {
	return count;
};
