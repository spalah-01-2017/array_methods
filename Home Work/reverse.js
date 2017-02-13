var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrReverse = arr.map(function(item, i, arr) {
  return arr[arr.length - (i + 1)];
});

console.log( arrReverse );