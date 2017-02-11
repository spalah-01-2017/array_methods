var arrOfData = [['name', 'Mark'],
                 ['single', false],
                 ['language', 'PHP'],
                 ['children', 0],
                 ['company', 'Facebook']];

function arrayToObject(arr) {
	var obj = {};
	arr.forEach(function(el) {
		obj[el[0]] = el[1];
	});
	return obj;
}
arrayToObject(arrOfData);