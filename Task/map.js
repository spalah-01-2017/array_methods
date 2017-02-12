var arr = [1,2,3]

var NewArray = arr.map(function(item, idx, arr) {
  return item = arr[arr.length - (idx+1)];
});

