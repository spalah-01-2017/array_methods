function copyObjForEach(obg){
	var objArr = Object.keys(obg);
	var newOb = {};
	objArr.forEach(function(item){
		newOb[item] = obg[item];
	});
	return newOb;
}

function copyObjReduce(obg){
	var objArr = Object.keys(obg);
	var newOb = {};
	objArr.reduce(function(prev,current){
		newOb[current] = obg[current];
	}, objArr[0]);
	return newOb;
}