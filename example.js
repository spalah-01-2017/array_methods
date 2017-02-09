var arr = ['John', 'Anna', 'Taras', 'Ahmet'];
arr.forEach(function(el, idx) {
    console.log(idx, 'Hi', el);
});
////////////
function Human(name) {
    return {
        speak: function() {
            return ('Hello, my name is ' + this.name);
        },
        name: name
    };
}

var names = ['John', 'Anna', 'Taras', 'Ahmet'];
var humans = [];
var humanGreetings = [];

names.forEach(function(el) {
    console.log(el);
});

names.map(function(el,i) {
    return i + 'Hello ' + el;
});

for(var i = 0; i < names.length; i++) {
    humans.push(Human(names[i]));
}

for(var i = 0; i < names.length; i++) {
    humanGreetings.push(Human(names[i]).speak());
}

///////

var o = [1,3,4].reduce(function(obj, el, i, arr) {
    obj[el] = 'index ' + i;
    return obj;
}, {});

///////

var o = {
    names: ['Taras', 'Anna', 'John'],
    logEach: function() {
        this.names.forEach(function(el) {
            console.log(el);
        })
    },
    countLetters: function() {
        return this.names.reduce(function(counter, name) {
            return counter + name.length;
        }, 0);
    }
}

//Цепочка вызовов
var names = ['John', 'Anna', 'Taras', 'Ahmet'];
function getNameLength(name) {
    return name.length;
}
function sum(a, b) {
    return a + b;
}
names.map(getNameLength).reduce(sum);


//this в качестве дополнительного аргумента
function Human(name, friends) {
    'use strict';
    return {
        name: name,
        speak: function() {
            return ('Hello, my name is ' + this.name);
        },
        sayHello: function(friend) {
            console.log('Hello ' + friend + '!');
        },
        greetFriends: function() {
            friends.forEach(function(friend) {
                this.sayHello(friend);
            }, this);
        },
        
    };
}
var o = Human('vasya', ['petya', 'ann', 'taras'])

//так НЕ нужно писать код, рассматриваем его только для понимания, как работает интерпретатор
// [1,2,3,4,5].map(function(num) {
//     return num % 2 && this.random();
// }, Math);
