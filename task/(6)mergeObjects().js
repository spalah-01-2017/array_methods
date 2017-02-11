var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { q: 8, b: 7, c: 6 };


function mergeObjects(o1,o2) {
	var obj = {};
	for (var key in o1) {
		obj[key] = o1[key];
	}
	for (var key in o2) {
		obj[key] = o2[key];
	}
	return obj;
}

mergeObjects(obj1,obj2);