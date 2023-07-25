/*
Implementing a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

function findSecondSmallest(arr){

    const minimum = Math.min(...arr);
    const minimumValueIndex = arr.indexOf(minimum);

    // convert the minimum value into the maximum value
    arr[minimumValueIndex] = Number.MAX_SAFE_INTEGER;

    const secondMinimum = Math.min(...arr);

    return secondMinimum;

}

const secondSmallest = findSecondSmallest([2,10,7,8,3,0,1]);
console.log(secondSmallest);