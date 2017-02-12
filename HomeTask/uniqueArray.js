function uniqueArray (arr) {
	var newArr = [];

	arr.forEach(function (el) {
		if (newArr.indexOf(el) === -1) newArr.push(el);
	});
	return newArr;
}

var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];

console.log(uniqueArray(arr));
