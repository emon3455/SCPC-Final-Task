/*
Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
*/

function positiveNumberSum(arr){
    let sum=0;
    arr.forEach(element => {
        if(element>0){
            sum +=element;
        }
    });
    return sum;
}

const sum = positiveNumberSum([2, -5, 10, -3, 7]);
console.log(sum);