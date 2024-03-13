//Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.

let number = 10;

if(number % 2 === 0) {
console.log(number + ' is even');
 } else {
 console.log('${number} is odd');
}

//Write a program based on age and displays a message based on their age using an if-else if statement
let age = 24;
if (age < 18) {
    console.log('You are a minor')
    } else if(age >= 18 && age < 65){
        console.log('You are an adult')
    } else if (age >= 65) {
        console.log ('You are a senior citizen')
    }

// Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
function checkLetterType(letter) {
    // Convert the letter to lowercase for case-insensitivity
    letter = letter.toLowerCase();

    // Check if the input is a single character
    if (letter.length === 1) {
        // Check if the letter is a vowel
        if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
            console.log(letter + " is a vowel.");
        } else {
            console.log(letter + " is a consonant.");
        }
    } else {
        console.log("Please enter a single letter.");
    }
}
let letter = 'e';

// Write a program based on 3 numbers and displays the largest number using an if-else statement
function findLargestNumber (num1,num2,num3){
    if (num1 >= num2 && num1 >= num3){
        console.log ("The largest number is: " + num1);
    } else if (num2 >= num1 & num2 >= num3) {
        console.log("The largest number is: " + num2)
    } else {
        console.log("The largest number is: " + num3);
    
    }
}

console.log(findLargestNumber (1,10,23));

// Write a program based on given password and displays a message based on the password using an if-else statemen

function checkPassword (password) {
    if (password.length < 8) {
        console.log("Password too short");
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password))
    {console.log('Password accepted');
    } else {
        console.log("Password rejected");
    }
}
console.log(checkPassword('Louie1234567'));

