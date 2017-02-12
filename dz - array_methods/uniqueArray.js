function uniqueArray(arr){
	var arrUnique = [];
	for(i=0;i<arr.length;i++){
		if(arrUnique.indexOf(arr[i]) === -1)
			arrUnique.push(arr[i]);
	}
	return arrUnique;
}