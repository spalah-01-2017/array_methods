function createObject (arrK, arrV) {
	var i = 0;
	return arrK.reduce(function (obj, el) {
		obj[el] = arrV[i++];
		return obj;
	}, {});
};

console.log(createObject(['name', 'mark', 'language'], ['John', 7, 'JS']));
