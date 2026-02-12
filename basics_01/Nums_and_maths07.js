const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // number => point ke baad 2 digit 

const otherNumber =123.8966 ;
console.log(otherNumber.toPrecision(3)); // round off karne me kaam aata hai lekin jitna -------------------☝️ number use kiye hai utna he aana chaheye point se pahle 


// Precesion digit se aage ke number dekhte hai pr thora risky hai // nai to value change bhi ho jata hai 

const bigNo = 100000;
console.log(bigNo.toLocaleString()); // us style
console.log(bigNo.toLocaleString('en-IN')); // indian style   


//++++++++++++++++++++++ Maths ++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs(-4)); // output: 4    
// - ko bs + me convert karta hai 

console.log(Math.round(4.6)); // output: 5
// ye bs round off karta hai number ko 

console.log(Math.ceil(4.2)); // output: 5
// ceil mtlb upper round kr dega

console.log(Math.floor(4.9)); // output: 4
//floor mtlb niche round off kr dega

console.log(Math.min(3,6,5,9,2)); // minimum value find 2

console.log(Math.max(3,6,5,9,2)); // maximum value find 9


// Maths very use in Random value 👇👇👇👇
 
console.log((Math.floor (Math.random() * 10)) + 1);


const min = 10 ;
const max = 20;

console.log((Math.floor(Math.random() * 10 ) ) + (max - min ) );
 

console.log(Math.floor(Math.random() * (max - min +1)) + min);

console.log(
    Math.floor(Math.random() * 100) + 1
);

// Generate number 1-5 👇👇👇

console.log(
    Math.floor(Math.random() * 5) + 1
);

// generate number b/w 10 - 20

console.log(
    Math.floor(Math.random() * 11) + 10
);


// Generate Number b/w 40-50

const min1 = 40;
const max2 = 50; 
console.log(
    Math.floor(Math.random() * (max2 - min1) + 1 ) + 40
);