//Write a program that declares two variables num1 and num2, assigns them number values, and then calculates and prints the product of num1 and num2.

let num1 = 5;
let num2 = 7;

console.log(num1*num2);


//Write a program that declares a variable radius and assigns it a number value representing the radius of a circle. 
//Then, use the exponentiation operator to calculate the area of the circle (pi times radius squared). 
//Print the resulting area to the console.
let radius1 = 10;

let area = Math.PI*(radius1**2);

console.log(area);


// Write a program that declares two variables age1 and age2, assigns them number values representing the ages of two different people, and then uses the greater than operator to determine if age1 is greater than age2.
// Print the resulting boolean value to the console.

let age1=5;
let age2=20;

console.log(age1>age2);

//Write a program that declares a variable name and assigns it a string value representing a person's name. 
//Then, use the not equal to operator to determine if name is not equal to the string "John Doe". 
//Print the resulting boolean value to the console.

let name1 = 'Louie';

console.log(name1 !='John Doe');

//Write a program that declares two variables isMember and hasCoupon, assigns them boolean values indicating whether or not a customer is a member and whether or not they have a coupon code, and then uses the logical OR operator to determine if the customer is eligible for free shipping. 
//Print the resulting boolean value to the console.

let isMember = false;
let hasCoupon = false;

// Assume free shipping is gained by being a member OR having a valid coupon
console.log(isMember==true||hasCoupon==true);


//Write a program that declares a variable num and assigns it a number value. 
//Then, use the logical NOT operator to determine if num is not equal to 0. Print the resulting boolean value to the console.

let num3=5;
console.log(num3!=0);

//Write a program that declares a variable age and assigns it a number value representing a person's age. 
//Then, use the conditional operator to determine if the person is old enough to vote. 
//If the person is old enough, print the string "You are old enough to vote" to the console. 
//Otherwise, print the string "You are not old enough to vote" to the console.

let age4=12;
let result = (age4>=18)?"You are old enough to vote":"You are not old enough to vote";

console.log(result);

//Write a program that declares a variable price and assigns it a number value representing the price of a product. 
//Then, use the conditional operator to determine if the product is on sale.
// If the product is on sale, print the string "The product is on sale" to the console. Otherwise, print the string "The product is not on sale" to the console.

let varprice = 7;
let saleprice = 10;
let result2 = (varprice<saleprice)? "The product is on sale":"The product is not on sale";

console.log(result2);
