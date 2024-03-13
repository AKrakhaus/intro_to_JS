//Create an array of student names

let students = ['Alex','Jimmy','Louie','Lisa','Jerry','Sue'];

// Find the length of an array
console.log(students.length)

//Demonstrate the use of array manipulation on students array by showing examples of pop,push,shift,unshift,splice functions

console.log(students);
let poppedValue = students.pop();
console.log(poppedValue);
let poppedValue2 = students.push('Kevin');
console.log(poppedValue2);
let poppedValue3 = students.shift;
console.log(poppedValue3);
let poppedValue4 = students.unshift('Alex2');
console.log(poppedValue4);
let poppedValue5 = students.splice(2,0,'Bogey');
console.log(poppedValue5);

//Find out if array includes the value 'John'

console.log(students.includes('John'));

//find the index of student "Kate"

console.log(students.indexOf('Kate'));

//reverse array and print last Index value

let studentsReverse = students.reverse();
console.log(studentsReverse);
let studentLength = students.length;
console.log(studentLength);
console.log(studentsReverse[studentLength-1]);

//find out if first index value equals to last index value

function isFirstEqualsToLast (arr){if (arr.length > 0) {
    // Compare the first and last elements
    return arr[0] === arr[arr.length - 1];
  } else {
    // If the array is empty, consider it as not equal
    return false;
  }
};

isFirstEqualsToLast (students);
console.log(isFirstEqualsToLast(students));