function mergeObjects () {
	var newObj = {};

	for (var i in arguments) {
		for (var item in arguments[i]) {
			newObj[item] = arguments[i][item];
		}
	}
	return newObj;
}

var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { q: 8, b: 7, c: 6 };
var obj3 = { x: 3, name: 'Alex' };
var obj4 = { array: [1, 4, 2, 7]};

console.log(mergeObjects(obj1, obj2, obj3, obj4));
