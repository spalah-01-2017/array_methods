function arrayToObject(arr) {
	var res = {};
	arr.forEach(function(ind) {
		res[ind[0]] = ind[1];
	});
	return res;
}
var arrOfData = [['name', 'Mark'],
                 ['single', false],
                 ['language', 'PHP'],
                 ['children', 0],
                 ['company', 'Facebook']];
arrayToObject(arrOfData);