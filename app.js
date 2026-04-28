function ageValidity(){
     let age = document.getElementById('userAge').value;

     let status = age >= 18 ? 'you are an adult' : 'you are a child';
     document.getElementById('result').innerText = status;
}

let a = 18;
let b = 'sumon'
let c = '18'