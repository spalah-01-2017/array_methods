var arr = [1,2,3,4,5];
var newArr;
newArr = arr.map(function(el, i, arr) {
	return el = arr[arr.length - (i + 1)];
});