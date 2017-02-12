var arrOfKeys = [];
var arrOfValues = [];
function createObject(arrOfKeys, arrOfValues) {
 	var o = {};
	arrOfKeys.forEach(function(item, idx, arr) {
	o[item] = arrOfValues[idx];
  });
  return o;
}
createObject(['name', 'mark'], ['John', 7]);