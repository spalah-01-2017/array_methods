function arrayToObject(arr){
	obj = {};
	for(i=0;i<arr.length;i++){
		obj[arr[i][0]] = arr[i][1];
	}
	return obj;
}