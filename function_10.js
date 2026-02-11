// Function

// console.log("L");
// console.log("i");
// console.log("g");
// console.log("h");
// console.log("t");

function sayMyName() {
    console.log("L");
    console.log("i");
    console.log("g");
    console.log("h");
    console.log("t");
}

// sayMyName()

function addTwoNumbers(number1, number2){
     
    // console.log(number1 + number2); // Method 1

    // let result = number1 + number2 // Method 2
    // return result // result ke baad kuch v print nahi hota hai 

    return  number1 + number2  // method 3 
    

}
const result = addTwoNumbers(1,5); 

console.log(result); // reselt undefined 

// function loginUserMessage(username){
function loginUserMessage(username ){
    return `${username} just logged in`
}

console.log(loginUserMessage(" "));


// fumction part - 2
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 500, 400, 2000));

const user = {
    usernam: "Light",
    price: 199
}









