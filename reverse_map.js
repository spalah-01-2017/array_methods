// (1) ⭐ Реализуйте функцию reverse, используя map. Функция должна возвращать новый массив.

function reverse_map(arr) {
  var res = [];
  arr.map(function(value, index) {
    res[arr.length - index - 1] = value;
  });
  return res;
}

var numbers = [1, 5, 10, 15];
console.log(reverse_map(numbers));
console.log(numbers);
