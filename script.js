let displayValue = '0';
let valueA;
let valueB;
let operation = '';


const operate = (operator, a, b) => {
  //takes an operator and 2 numbers and then calls one of the above functions on the numbers.
  switch(operator) {
    case '+':
      return a+b;
    case '-':
      return a-b;
    case 'x':
      return a*b;
    case '➗':
      return a/b;
  }
}

//display populates when number is clicked
let display = document.querySelector('.display-box')
let numbers = document.querySelectorAll('.number');

const popNumber = (e) => {

    //when another number is clicked, it replaces current number on display
    if(operation != '') { //meaning if an operator has been selected
        displayValue = '0'; //resets display for second number
        display.innerHTML = displayValue;
        
    }

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
//console.log(displayValue);

//testing
let test = document.querySelector('.test');
let testButton = document.querySelector('.test-button');
const testFunc = () => {
    test.innerHTML =  `current value is ${displayValue}`;
}

//clear display when AC
const clear = () => {
    displayValue = '0';
    display.innerHTML = displayValue;
    valueA = 0;
    operation = '';
}
const allClear = document.querySelector('.clear')
allClear.addEventListener('click', clear)

//actual calculator functionality
const calculation = (e) => {

    if(e.innerHTML != '=') { //calculate won't run on '='
        valueA = parseInt(displayValue); 
        operation = e.innerHTML; // saves the operator to be used later
    }
    //when an operator is clicked, the current number and the operator are saved
    
    console.log(`value A: ${valueA}`);
    console.log(operation);

}

let operator = document.querySelectorAll('.operator')
operator.forEach(x=>x.setAttribute('onclick','calculation(this)'));

    //clicking equal sign will display the solution
const solution = (e) => {
    valueB = parseInt(displayValue); 
    displayValue = operate(operation, valueA, valueB);
    display.innerHTML = displayValue;
    console.log(`value B: ${valueB}`);
}

const equals = document.querySelector('.equal');
equals.addEventListener('click', solution);

//console.log(operate('+', 2, 3));

//BUUUGGGS
//second number input only allows for single digits
//need to visually show which operator is selected 
//add functionality to +/- and & buttons