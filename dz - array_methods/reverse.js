function reverse(arr){
	var newAr = arr.map(function(val,i){
		return arr[arr.length - 1 - i];
	});
	return newAr;
}