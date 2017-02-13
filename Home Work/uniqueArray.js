var arr = [3, 5, 'mozilla', 'JavaScript', 'mozilla', 4, 5];

function uniqueArray(arr) {
  return arr.reduce(function (memo, item) {
        if(memo.indexOf(item) < 0) memo.push(item); 
        return memo;
    }, []);
}

console.log(uniqueArray(arr));
