let productPrice = 10;
let amountInWallet = 30;
let isProductAvailable = false;
let useCreditAvailable = true;

/// logical AND (&&)

if(amountInWallet >= productPrice && isProductAvailable === true) {console.log('You can purchase the product');

}

/// Logical OR (||)

if (amountInWallet >= productPrice || useCreditAvailable === true) {console.log('You are eligible to purchase this product')

}

let isUserLoggedIn = false;

// Using logical not operator to invert the value

let isUserLoggedOut = !isUserLoggedIn;

console.log(isUserLoggedOut);

let age = 18;

// Using the ternary operator to assign a value to a variable

let isAdult = age >=18 ? 'adult' : 'child';

console.log(isAdult)

