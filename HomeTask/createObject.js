function createObject (arrK, arrV) {
	var i = 0;
	return arrK.reduce(function (prev, next) {
		prev[next] = arrV[i++];
		return prev;
	}, {});
};

console.log(createObject(['name', 'mark', 'language'], ['John', 7, 'JS']));
