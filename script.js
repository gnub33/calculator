let displayValue = '0';
let valueA = 0;
let valueB = 0;
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
    if(operation != '') { //if an operator has been selected
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


//clear display when AC
const clear = () => {
    displayValue = '0';
    display.innerHTML = displayValue;
    valueA = 0;
    valueB = 0;
    operation = '';
}
const allClear = document.querySelector('.clear')
allClear.addEventListener('click', clear)

//actual calculator functionality
const calculation = (e) => { // when you click an operator button

    //operation = e.innerHTML;

    

    if(operation == '=' || valueA == 0){//after solution button is clicked or upon clicking clear button
        valueA = parseInt(displayValue);
        operation = e.innerHTML;
        displayValue = '0';

    } 
    
    else { //when chaining operations
        // console.log(`first value B before parse: ${valueB}`);
        // console.log(typeof displayValue)
        // console.log(displayValue)
        // console.log(parseInt(displayValue))
        valueB = parseInt(displayValue);
        // console.log(`value A: ${valueA}`)
        // console.log(`value B after parse: ${valueB}`);

        displayValue = operate(operation, valueA, valueB); 
        // console.log(`solution is ${displayValue}`)
        display.innerHTML = displayValue; //shows solution immediately
        valueA = parseInt(displayValue); //solution goes to A variable
        operation = e.innerHTML;// update current operator
        displayValue = '0'; //clear display for next number input
    }


}

let operator = document.querySelectorAll('.operator')
operator.forEach(x=>x.setAttribute('onclick','calculation(this)'));

    //clicking equal sign will display the solution
const solution = (e) => {
    valueB = parseInt(displayValue); 
    displayValue = operate(operation, valueA, valueB);
    display.innerHTML = displayValue;
    valueA = parseInt(displayValue);
    operation = '=';
}

const equals = document.querySelector('.equal');
equals.addEventListener('click', solution);

//console.log(operate('+', 2, 3));

//testing
let test = document.querySelector('.test');
let testButton = document.querySelector('.test-button');
const testFunc = () => {
    test.innerHTML =  `displayValue string is ${displayValue} current A value is ${valueA} and B value is ${valueB}, operation is ${operation}`;
}

// let test = document.querySelector('.test');
// let testButton = document.querySelector('.test-button');
// const testFunc = () => {
//     test.innerHTML =  `current A value is ${valueA} and B value is ${valueB}, operation is ${operation}`;
// }

//BUUUGGGS
//Switch operator on the fly
//need to visually show which operator is selected 
//add functionality to +/- and % buttons