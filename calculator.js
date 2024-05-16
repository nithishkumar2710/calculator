function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        return "Undefined"
    }
     return a/b;
}

function exponent (a,b){
    return Math.pow(a,b);
}

function squareRoot(a){
    return Math.sqrt(a);
}

function modulus(a,b){
    return a%b;
}

function calculator(){
    let operator = prompt("Enter operator (+,-,*,/,^,sqrt,%):");
    let num1, num2;

    if(operator!== 'sqrt'){
        num1 = parseFloat(prompt("Enter first number:"));
        num2= parseFloat(prompt("Enter second number"));
    }else {
        num1 = parseFloat(prompt("Enter a number:"));
    }
    let result;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case '^':
            result = exponent(num1, num2);
            break;
        case 'sqrt':
            result = squareRoot(num1);
            break;
        case '%':
            result = modulus(num1, num2);
            break;
        default:
            result = "Invalid operator!";
    }
    alert("Result: " + result);
}
calculator();