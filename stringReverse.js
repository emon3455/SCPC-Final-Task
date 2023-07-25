/*
Creating a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
*/

function reverseTheString(str){
    let rev="";
    for(let i=str.length-1; i>=0; i--){
        rev+=str[i];
    }
    return rev;
}

const reverse = reverseTheString("hello world");
console.log(reverse);
