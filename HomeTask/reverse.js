function reverseArray (arr) {
	return arr.map(function(el, i, a) {
		return a[a.length - (i + 1)];
	});
}

var arr = ['1', 'Hello', 3, 4];

console.log(reverseArray(arr), arr);
