//Declare a new string variable with name coder and set value to 'I am a good programmer'
//Find out the type of the variable coder
//Find out the length of the variable coder
//Convert to all uppercase
//Convert to all lowercase
//Find out if it includes the word ‘good’
//Strip out the word  ‘programmer’ from variable
//Find out if variables ends with the word `programmer`
//Split the variable into two variable at `good` word 

let coder = 'I am a good programmer';

console.log(typeof(coder));

console.log(coder.length);

console.log(coder.toUpperCase());
console.log(coder.toLowerCase());
console.log(coder.includes('good'));
console.log(coder.substring(0,12));
console.log(coder.endsWith('programmer'));
console.log(coder.split('good'));