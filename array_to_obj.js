// (5) ⭐ Функция, принимающая в качестве аргумента многомерный массив и возвращающая объект, содержащий информацию из этого массива.
//
// var arrOfData = [['name', 'Mark'],
//                  ['single', false],
//                  ['language', 'PHP'],
//                  ['children', 0],
//                  ['company', 'Facebook']];
//
// arrayToObject(arrOfData);
//
// // {
// //     'name': 'Mark',
// //     'single': false,
// //     'language': 'PHP',
// //     'children': 0,
// //     'company': 'Facebook'
// // }
//
// function arrayToObject(arr) {
//
// }

var arrOfData = [['name', 'Mark'],
                 ['single', false],
                 ['language', 'PHP'],
                 ['children', 0],
                 ['company', 'Facebook']];

function arrayToObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    res[arr[i][0]] = arr[i][1];
  }
  return res;
}

console.log(arrayToObject(arrOfData));
