/*
function ageValidity() {
     let age = document.getElementById('userAge').value;

     let status = age >= 18 ? 'you are an adult' : 'you are a child';
     document.getElementById('result').innerText = status;
}
 javascript if statement
let person;
person = 'Musfiq';

if (person == 'sumon') {
     console.log(person + ' is a famous');
} else if (person == 'sakib') {
     console.log(person + ' he is a batper');
} else if (person == 'hadi') {
     console.log(person + ' he is a unbelivable person');
} else {
     console.log('please enter a valid person name');
}

let age;
age = 20;

if (age >= 18) {
     console.log('you are a adult person');
} else if (age < 18) {
     console.log('you are a child');
} else {
     console.log('please enter a valid age');
}
switch (person) {
     case 'sakib':
          console.log('He is bad person');
          break;
     case 'tamim':
          console.log('He is a chatukar');
          break;
     case 'Musfiq':
          console.log('he is not a bad palyer');
          break;
     default:
          console.log('please enter valid name');
}

switch (new Date().getDay()) {
     case 0:
          console.log('Sunday');
          break;
     case 1:
          console.log('Monday');
          break;
     case 2:
          console.log('tuesDay');
          break;
     case 3:
          console.log('Wednesday');
          break;
     case 4:
          console.log('Thursday');
          break;
     case 5:
          console.log('Friday');
          break;
     case 6:
          console.log('Saturday');
          break;
}

js loop
for (let i = 1; i <= 50; i++) {
     if (i % 5 == 2) {
          console.log(i);
     }
}

let car = ['BMW', 'Volvo', 'Toyota', 'Ford', 'Tesla'];
car.push('Saab');

for (let j = 0; j < car.length; j++) {
     console.log(car[j]);
}

let personData = {
     name: 'Md Sumon Ali Akondo',
     age: 24,
     country: 'Bangladesh',
     job: 'Web Developer',
};

for (let i in personData) {
     let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
     console.log(capLetter + ': ' + personData[i]);
}

car.forEach(function (dataEntry) {
     console.log(dataEntry);
});

for (let i of car) {
     console.log(i);
}

let num = 0;
while (num < 7) {
     console.log(num);
     num++;
}

function isSubscribe(){
     document.getElementById('outPut').innerText = 'Subscribed';
}

function isSubscribe() {
     document.getElementById('outPut').innerText = 'Subscribed';
}
document.getElementById('btn').addEventListener('click', isSubscribe);

(function (myText) {
     console.log('this is inovoked function', myText);
})('Hello my Text');

let maths = function (x, y) {
     return x * y;
};
console.log(maths(3, 4));
console.log(maths(20, 5));

function newFunc() {
     let firstName = 'Ali';
     console.log(firstName);
}
newFunc();

let numbers = [4, 5, 7];
let sqNumbers = numbers.map(function (number) {
     return number * number;
});

console.log(sqNumbers);

 arrow function

let add = (x, y) => x * y;
console.log(add(105, 10));


function great(firstName){
     function sayHello(){
          alert ('hello ' + firstName);
     }
     return sayHello();
}
great('ali');
*/

//Javascripti Objects

const mySymb = Symbol('key1');
const mobileModel = {
     //key: value
     brand: 'Samsung',
     model: 's24 Ultra',
     processor: 'Sanpdragon Gen 3',
     camera: ['200MP', '12Mp', '12MP'],
     hasSelfieCamera: true,
     'Selfi Camera': '24MP',
     [mySymb]: 'Mykey1',
     brandModel: function () {
          return `Mobile brand is ${this.brand} and model is ${this.model}`;
     },
     battary: {
          mah: 5000,
     },
};

console.log(mobileModel.brandModel());
console.log(mobileModel.brand);
mobileModel.model = 's25 Ultra';
Object.freeze(mobileModel);
console.log(mobileModel.model);
// console.log(mobileModel.hasOwnProperty('cameras'));
// console.log(mobileModel['Selfi Camera']);
// console.log(mobileModel[mySymb]);

// console.log(Object.keys(mobileModel));
// console.log(Object.values(mobileModel));

const obj1 = {
     a: 1,
     b: 2,
     c: 2,
};
const obj2 = {
     d: 1,
     e: 2,
     f: 2,
};
const obj3 = {
     g: 1,
     h: 2,
     i: 2,
};

const objFinal = Object.assign({}, obj1, obj2, obj3);
// let objFinal = { obj1, obj2, obj3 };
console.log(objFinal);
console.log(mobileModel.battary.mah);

function Person() {
     ((this.firstName = 'Ali'), (this.lastName = 'Hasan'));
}

const person1 = new Person();
console.log(person1);