function createObject(keys,values){
	obj = {};
	for(i=0;i<keys.length;i++){
		obj[keys[i]] = values[i];
	}
	return obj;
}