function arrayToObject (arr) {
	return arr.reduce(function (prev, next) {
		prev[next[0]] = next[1];
		return prev;
	}, {});
};

var arrOfData = [['name', 'Mark'],
                 ['single', false],
                 ['language', 'PHP'],
                 ['children', 0],
                 ['company', 'Facebook']];

console.log(arrayToObject(arrOfData));
