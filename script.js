let displayValue = '0';

const add = (a, b) => {
  return a+b;
}
const subtract = (a, b) => {
  return a-b;
}
const multiply = (a, b) => {
  return a*b;
}
const divide = (a, b) => {
  return a/b;
}

const operate = (operator, a, b) => {
  //takes an operator and 2 numbers and then calls one of the above functions on the numbers.
  switch(operator) {
    case '+':
      add(a,b);
      break;
    case '-':
      subtract(a,b);
      break;
    case '*':
      multiply(a,b);
      break;
    case '/':
      divide(a,b);
      break;
  }
}

//display populates when number is clicked
let display = document.querySelector('.display-box')
let numbers = document.querySelectorAll('.number');

const popNumber = (e) => {
  //need to get rid of initial 0??
  
  //display.innerHTML = e.innerHTML; //replaces  html display with number

  if(displayValue === '0'){
      displayValue = displayValue.replace('0', `${e.innerHTML}`);
  }else{
      displayValue += e.innerHTML; // adds number to JS variable
      
  };
  display.innerHTML = displayValue; //changes html display to current JS variable
}

numbers.forEach(number=>
                number.setAttribute('onclick','popNumber(this)'));


// console.log(numbers[2]);
console.log(displayValue);

//testing
let test = document.querySelector('.test');
let testButton = document.querySelector('.test-button');
const testFunc = () => {
    test.innerHTML =  `current value is ${displayValue}`;
}
