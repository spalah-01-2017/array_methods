function mergeObjects(obj1,obj2){
	var objNew = {};
	for(var val in obj1){
		objNew[val] = obj1[val];
	}
	for(val in obj2){
		objNew[val] = obj2[val];
	}
	return objNew;
}