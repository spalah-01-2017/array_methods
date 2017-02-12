function copyObj (obj) {
	var keys = Object.keys(obj);
	var newObj = {};

	keys.forEach(function (el, i) {
		newObj[el] = obj[el];
	});

	return newObj;
}

function copyObj2 (obj) {
	var keys = Object.keys(obj);
	return keys.reduce(function (prev, next) {
		prev[next] = obj[next];
		return prev;
	}, {});
}

var a = {a: 1, b: 2};
var b = copyObj2(a);

b.c = 3;

console.log(b.c !== a.c);
