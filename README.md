## Домашнее задание

### Теория

[Перебирающие методы массивов](https://learn.javascript.ru/array-iteration)

[Метод reduce](https://habrahabr.ru/post/222317/)

[Продвинутое чтение про this](http://dmitrysoshnikov.com/ecmascript/ru-chapter-3-this/)

[Примеры с занятия](/example.js)

===
### Практика (Реализуйте функции, используя методы массивов по-максимуму)

(1) ⭐ Реализуйте функцию reverse, используя map. Функция должна возвращать новый массив.

(2) ⭐ Функция принимает два массива и возвращает объект с именами свойств, соответсвующими элементам первого массива и значениями, соответсвующими элементам второго массива.
Пример:
```javascript
createObject(['name', 'mark'], ['John', 7]); //{'name': 'John', 'mark': 7}

function createObject(arrOfKeys, arrOfValues) {
    
}
```

(3) ⭐ Функция, принимающая в качествре аргумента объект и возвращающая новый объект - копию объекта, переданного функции.Вместо конструкции for in используйте статический метод Object.keys(https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys). Сделайте две реализации: первая - с использованием метода forEach, вторая - с использованием метода reduce
Пример:
```javascript
var o1 = { a: 5 };
var o2 = copyObj(o1); o2; //{a: 5}
```
Должна выполняться следующая проверка:
```javascript
o2.a = 'New value'; o1.a !== o2.a; //true
o2; //{a: 'New value'}
o1; //{a: 5}

function copyObj(obj) {

}
```

(4) Первая функция, принимающая в качестве аргумента массив объектов, представляющих студентов, и возвращающая этот же массив, отсортированный по оценке студента в убывающем порядке. Вторая функция, возаращающая отсортированный массив, но по имени в алфавитном порядке.

Пример:
```javascript
var students = [{ name: 'Taras', mark: 4 },
                { name: 'anna', mark: 9 },
                { name: 'Pavlo', mark: 6 },
                { name: 'Mila', mark: 10 }];

sortByMark(students); 
// [{ name: 'Mila', mark: 10 },
// { name: 'anna', mark: 9 },
// { name: 'Pavlo', mark: 6 },
// { name: 'Taras', mark: 4 }];

sortByName(students); 
// [{ name: 'anna', mark: 9 },
// { name: 'Mila', mark: 10 },
// { name: 'Pavlo', mark: 6 },
// { name: 'Taras', mark: 4 }];

function sortByMark(arr) {

}

function sortByName(arr) {
    
}
```

(5) ⭐ Функция, принимающая в качестве аргумента многомерный массив и возвращающая объект, содержащий информацию из этого массива.

```javascript
var arrOfData = [['name', 'Mark'],
                 ['single', false],
                 ['language', 'PHP'],
                 ['children', 0],
                 ['company', 'Facebook']];

arrayToObject(arrOfData);

// {
//     'name': 'Mark',
//     'single': false,
//     'language': 'PHP',
//     'children': 0,
//     'company': 'Facebook'
// }

function arrayToObject(arr) {

}
```

(6) ⭐ Функция, принимающая в качестве аргументов два объекта и возвращающая новый объект со всеми свойствами первого объекта плюс свойствами второго объекта. Если имена свойств двух объектов совпапдают, значение соответсвующего свойства возвращаемого объекта должно быть равным значению свойства второго объекта.

Пример:
```javascript
var obj1 = { a: 10, b: 20, c: 30 };
var obj2 = { q: 8, b: 7, c: 6 };

mergeObjects(obj1,obj2);
// {
//     a: 10,
//     b: 7,
//     c: 6,
//     q: 8
// }

function mergeObjects(o1,o2) {

}
```

(7) ⭐ Функция, принимающая в качестве аргумента массив и возвращающая новый массив с уникальными элементами из первого.

Пример:
```javascript
var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];
uniqueArray(arr); //[3, 5, 'mozilla', 'JavaScript', 4]

function uniqueArray(arr) {

}
```

___
⭐ - обязательное задание
Все функции должны находиться в разных файлах (одна функция - один файл) с именем этой функции. Например, реализация функции reverse должна находиться в файле reverse.js.
