// (3) ⭐ Функция, принимающая в качествре аргумента объект и возвращающая новый объект - копию объекта, переданного функции.Вместо конструкции for in используйте статический метод Object.keys(https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys). Сделайте две реализации: первая - с использованием метода forEach, вторая - с использованием метода reduce Пример:
//
// var o1 = { a: 5 };
// var o2 = copyObj(o1); o2; //{a: 5}
//
// Должна выполняться следующая проверка:
//
// o2.a = 'New value'; o1.a !== o2.a; //true
// o2; //{a: 'New value'}
// o1; //{a: 5}
//
// function copyObj(obj) {
//
// }

function copyObj(obj) {
  var res = {};
  keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    res[keys[i]] = obj[keys[i]];
  }
  return res;
}

var o1 = { a: 5 };
var o2 = copyObj(o1); //o2; //{a: 5}
