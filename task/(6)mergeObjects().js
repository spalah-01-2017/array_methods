var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { q: 8, b: 7, c: 6 };


function mergeObjects() {
	var newObj = {};
	for(var obj in arguments) {
		for(var key in arguments[obj]) {
			newObj[key] = arguments[obj][key];
		}
	}
	return newObj;
}
mergeObjects(obj1,obj2);
