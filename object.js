var person = {
  name: 'bellmin',
  age: 30,
  family: ['dad', 'mom', 'brother']
};

var myName = person['name'];
var myAge = person['age'];
var myFamily = person.family

console.log(myName);
console.log(myAge);
console.log(myFamily);

var person = {
  name: "JM",
}

console.log(person.name);
console.log(person.age);

person.age = 30;

console.log(person.age);

delete person.age;
console.log(person.age);

const sample = {
  one: 1,
  two: 2,
  three: 3 
};

for (let prop in sample) {
  console.log(prop);
  console.log(sample[prop]);
}

const me = 'bellmin kim'

function getAge() {
  return 30;
}

const person3 = {
  name: me,
  age: getAge()
};

console.log(person3);

const property = 'name';

const obj = {
  [property]: 'bellmin kim'
};

console.log(obj.property);
console.log(obj.name);

const person4 = {
  greet: function() {
    return 'hello';
  }
}

console.log(person4.greet());

const arr4 = [1,2,3];

console.log(arr4[0]);
console.log(arr4.title);

arr4.title = 'Vanilla'
console.log(arr4.title);

console.log(arr4);

function foo (a, b) {
  return a + b + 3;
}

console.log(foo.title);

foo.title = 'vanilla';

console.log(foo.title);

console.log(foo(1, 2));
console.log(foo(1,2,3,));
