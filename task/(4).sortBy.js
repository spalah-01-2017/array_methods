var students = [{ name: 'Taras', mark: 4 },
								{ name: 'anna', mark: 9 },
								{ name: 'Pavlo', mark: 6 },
								{ name: 'Mila', mark: 10 }];

function sortByMark(arr) {
	return arr.sort(function(a, b) {
		return b.mark - a.mark;
	});
}
function sortByName(arr) {
	return arr.sort(function(a, b) {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
	});
}

sortByMark(students);

sortByName(students);
