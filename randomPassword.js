/*
Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
*/

function generateRandomNumber(size){

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%&*?";

    const allCharacter= uppercase + lowercase + numbers + specialChars;
    let password = "";

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacter.length);
        password += allCharacter.charAt(randomIndex);
    }

    return password;

}

const randomPassword = generateRandomNumber(10);
console.log(randomPassword);