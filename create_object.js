// (2) ⭐ Функция принимает два массива и возвращает объект с именами свойств, соответсвующими элементам первого массива и значениями, соответсвующими элементам второго массива. Пример:
//
// createObject(['name', 'mark'], ['John', 7]); //{'name': 'John', 'mark': 7}
//
// function createObject(arrOfKeys, arrOfValues) {
//
// }

function createObject(arrOfKeys, arrOfValues) {
  var res = {};
  var min_arr = arrOfKeys.length > arrOfValues.length ? arrOfValues : arrOfKeys
  for (var i = 0; i < min_arr.length; i++) {
    res[arrOfKeys[i]] = arrOfValues[i];
  }
  return res;
}

obj = createObject(['name', 'mark'], ['John', 7]); //{'name': 'John', 'mark': 7}
console.log(obj);
