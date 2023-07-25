/*
 Implementing a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

function calculation(num1, num2, operator){
    if(operator==="+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else{
        return num1/num2;
    }
}

const result = calculation(3,2,"/");
console.log(result);