function copyObj(obj) {
	var arr = [];
	var object = {};
	arr = Object.keys(obj);
	arr.forEach(function(el){
		object[el] = obj[el];
	});
	return object;
};

function copyObj2(obj) {
	var keys = [];
	keys = Object.keys(obj);
	return keys.reduce(function(prev, cur) {
		prev[cur] = obj[cur];
		return prev;
	}, {});
};

var o1 = {'a': 1};
var o2 = copyObj(o1);
console.log(o2);
o2.a = 'New value';
o2.a !== o1.a;
