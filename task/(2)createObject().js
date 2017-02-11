function createObject(arrOfKeys, arrOfValues) {
	var obj = {};
	arrOfKeys.forEach(function(el,i) {
		obj[el] = arrOfValues[i];
	});
	return obj;
}

createObject(['name', 'mark'], ['John', 7]);