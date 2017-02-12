function sortByMark(arr) {
	return arr.sort(function(x, y) {
		return y.mark - x.mark;
	});
}

function sortByName(arr) {
	return arr.sort(function(x, y) {
		var xToUpper = x.name.toUpperCase();
		var yToUpper = y.name.toUpperCase();
		
		if (xToUpper > yToUpper) return 1;
		if (xToUpper < yToUpper) return -1;
	});
}

var students = [{ name: 'Taras', mark: 4 },
				{ name: 'anna', mark: 9 },
				{ name: 'Pavlo', mark: 6 },
				{ name: 'Mila', mark: 10 },
				{ name: 'Stepan', mark: 5},
				{ name: 'Bill', mark: 7},
				{ name: 'vasya', mark: 8}];

console.log(sortByMark(students));
console.log('\n');
console.log(sortByName(students));
