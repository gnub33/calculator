let displayValue = '0';
let valueA = 0;
let valueB = 0;
let operation = '';
let equalMode = false; //equal mode allows the last operation to be repeated when equal sign is clicked again


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
        if(b == 0){
            return 'Nope'
        }else {
            return a/b;
        }
  }
}

//display populates when number is clicked
let display = document.querySelector('.display-box')
let numbers = document.querySelectorAll('.number');

const popNumber = (e) => {

    allClear.innerHTML ='C';

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
    allClear.innerHTML ='AC';
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
    equalMode = false;
    console.log(equalMode)

    if(operation == '=' || valueA == 0){//after solution button is clicked or upon clicking clear button
        valueA = parseFloat(displayValue);
        operation = e.innerHTML;
        displayValue = '0';

    } 
    
    else { //when chaining operations
 
        valueB = parseFloat(displayValue);
        displayValue = operate(operation, valueA, valueB); 
        display.innerHTML = displayValue; //shows solution immediately
        valueA = parseFloat(displayValue); //solution goes to A variable
        operation = e.innerHTML;// update current operator
        displayValue = '0'; //clear display for next number input
    }


}

let operator = document.querySelectorAll('.operator')
operator.forEach(x=>x.setAttribute('onclick','calculation(this)'));

    //clicking equal sign will display the solution
const solution = (e) => {

    if(operation == '') { //prevents error if no operator has been selected
        //pass
    }else if(equalMode){ //after pressing equal sign twice in a row
        displayValue = operate(operation, valueA, valueB);
        display.innerHTML = displayValue;
        valueA = parseFloat(displayValue);
    }else {
        valueB = parseFloat(displayValue); 
        displayValue = operate(operation, valueA, valueB);
        display.innerHTML = displayValue;
        valueA = parseFloat(displayValue);
        displayValue = '0' //resets display after calculation so previous number is omitted from screen
        equalMode = true;
        operation = '=';//WTF HERE IS THE PROBLEM!!!!!
    }

    console.log(equalMode)
    
}

const equals = document.querySelector('.equal');
equals.addEventListener('click', solution);

//console.log(operate('+', 2, 3));

//for testing...hidden by default
let test = document.querySelector('.test');
let testButton = document.querySelector('.test-button');
const testFunc = () => {
    test.innerHTML =  `displayValue string is ${displayValue} current A value is ${valueA} and B value is ${valueB}, operation is ${operation}`;
}
testButton.style.display = 'none';

//Percentage
const percentage = ()=> {
    let b = parseFloat(displayValue);
    b /= 100;
    displayValue = b.toString();
    display.innerHTML = displayValue;
}
const percent = document.querySelector('.percent');
percent.addEventListener('click', percentage);

//Negative % Positive Values
const changeSign = () => {
    let a = parseFloat(displayValue);
    a *= -1;
    displayValue = a.toString();
    display.innerHTML = displayValue;
}
const posneg = document.querySelector('.posneg');
posneg.addEventListener('click', changeSign);



//BUUUGGGS
//After hitting solution, problem does not chain if operation = '='. It will reset if new number is selected
//Vis-a-verse if operation != '=' the problem will chain
//should only chain after solution button if another operator is selected. It should reset if a number is selected
//need to visually show which operator is selected. use a border.
