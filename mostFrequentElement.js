/*
Write a JavaScript program to find the most frequent element in an array and return it. 
*/

function mostFrequentElement(arr){

    const frequency=[0,0,0,0,0,0,0,0,0,0];

    // finding frequency
    arr.forEach(element => {
        frequency[element]+=1;
    })
    
    const maximum = Math.max(...frequency);
    const frequent= frequency.indexOf(maximum);

    return frequent;
}

const frequentNumber = mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log(frequentNumber);



