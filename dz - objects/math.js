//////задание 1
function math(){
	var obj = {
		add: function(a,b){
			return a + b;
		},
		subtract: function(a,b){
			return a - b;
		},
		divide: function(a,b){
			return a / b;
		},
		multiply: function(a,b){
			return a * b;
		},
		pow: function(a,b){
			return a ** b;
		}
	}
	return obj;
}
//////////////

//задание 2
function math2(){
	var obj = {
		add: function(a,b){
			res = a + b;
			this.memory.push(res);
			return res;

		},
		subtract: function(a,b){
			res = a - b;
			this.memory.push(res);
			return res;
		},
		divide: function(a,b){
			res = a / b;
			this.memory.push(res);
			return res;
		},
		multiply: function(a,b){
			res = a * b;
			this.memory.push(res);
			return res;
		},
		pow: function(a,b){
			res = a ** b;
			this.memory.push(res);
			return res;
		},
		memory: []
	}
	return obj;
}