function ageValidity() {
     let age = document.getElementById('userAge').value;

     let status = age >= 18 ? 'you are an adult' : 'you are a child';
     document.getElementById('result').innerText = status;
}
// javascript if statement
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
          console.log('Tuesday');
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
     default:
          console.log('Miss the day');
}

switch (new Date().getDay()) {
     case 0:
          console.log('Sunday');
          break;
     case 1:
          console.log('Monday');
     case 2:
          console.log('Tuesday');
          break;
     case 3:
          console.log('Wednesday');
          break;
     case 4:
          console.log('Thursday');
          break;
     case 5:
          console.log('Today our off day');
          break;
     case 6:
          console.log('Saturday');
}

// js loop
for(let i = 1; i <= 50; i++){
     if(i % 5 == 2){
          console.log(i);
     }
}
