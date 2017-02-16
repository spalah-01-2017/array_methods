// (7) ⭐ Функция, принимающая в качестве аргумента массив и возвращающая новый массив с уникальными элементами из первого.
//
// Пример:
//
// var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];
// uniqueArray(arr); //[3, 5, 'mozilla', 'JavaScript', 4]
//
// function uniqueArray(arr) {
//
// }

function uniqueArray(arr) {
  var res = [];
  arr.map(function functionName(value, index, array) {
    if (res.indexOf(value) == -1) {
      res.push(value);
    }
  })
  return res;
}

var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];
console.log(uniqueArray(arr));
// uniqueArray(arr); //[3, 5, 'mozilla', 'JavaScript', 4]
