/*
 Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
*/

function romanToDecimal(roman) {
    const romanNumber = roman.toUpperCase();
    const romanNumeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let decimal = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        const currentSymbol = romanNumber[i];
        const currentValue = romanNumeralsMap[currentSymbol];
        const nextSymbol = romanNumber[i + 1];
        const nextValue = romanNumeralsMap[nextSymbol];

        if (nextValue > currentValue) {
            decimal += nextValue - currentValue;
            i++; 
        } else {
            decimal += currentValue;
        }
    }

    return decimal;
}

const decimal = romanToDecimal("IX");
console.log(decimal); // Output: 9
