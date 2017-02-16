// (4) Первая функция, принимающая в качестве аргумента массив объектов, представляющих студентов, и возвращающая этот же массив, отсортированный по оценке студента в убывающем порядке. Вторая функция, возаращающая отсортированный массив, но по имени в алфавитном порядке.
//
// Пример:

function sortByMark(arr) {
  arr.sort(function(a, b) {
    return a.mark - b.mark;
  });
  arr.reverse();
  return arr;
}

function sortByName(arr) {
  arr.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return arr;
}

var students = [
                { name: 'Mila', mark: 10 },
                { name: 'anna', mark: 9 },
                { name: 'Pavlo', mark: 6 },
                { name: 'Taras', mark: 4 }
              ];

console.log('Sorted by mark');
sortByMark(students);
console.log(students);

console.log('Sorted by name');
sortByName(students);
console.log(students);
