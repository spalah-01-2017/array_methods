function range(a,b){
	arr = [];
	for(a;a<=b;a++){
		arr.push(a);
	}
	return arr;
}

function sum(arr){
	sum = 0;
	for(i=0;i<arr.length;i++){
		sum += arr[i];
	}
	return sum;
}

function range2(a,b,c){
	if(c === undefined){
		c = 1;
	}
	arr = [];
	d = c > 0 ? 1 : -1;
	for(a;a!==b+d;a=a+c){
		arr.push(a);
	}
	return arr;

}