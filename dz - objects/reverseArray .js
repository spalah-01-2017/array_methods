function reverseArray(arr){
	newAr = [];
	for(i=arr.length;i>=0;i--){
		newAr.push(arr[i]);
	}
	return newAr;
}

function reverseArrayInPlace(arr){
	for(i=arr.length-1;i>=0;i--){
		arr.push(arr[i]);
	}
	arr.splice(0, arr.length/2);
}