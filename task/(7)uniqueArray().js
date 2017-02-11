var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];

function uniqueArray(arr) {
	var obj = {};
	var newArr = [];
	arr.forEach(function(el, i) {
		obj[el] = i;
	});
	newArr = Object.keys(obj);
	console.log(newArr);
	var filterArr = [];
	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	newArr.forEach(function(el, i) {
		if (isNumeric(el)) {
			filterArr[i] = parseFloat(el);
		} else {
			filterArr[i] = el;
		};
	});
	return filterArr;
}

uniqueArray(arr);