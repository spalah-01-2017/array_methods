var students = [{ name: 'Taras', mark: 4 },
                { name: 'Anna', mark: 9 },
                { name: 'Pavlo', mark: 6 },
                { name: 'Mila', mark: 10 }];
function sortByMark(students) {
	return students.sort(function(a, b) {
		return b.mark - a.mark;
	});
}

function sortByName(students) {
	return students.sort(function(a, b) {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
	});
}

sortByMark(students);

sortByName(students);