// Memory => where JavaScript stored data.
// like:- variable, function,object ect.

//two Types of JavaScript 
// 1 Stack    2. Heap 

// Stack Memory (stored only Primitive Data types)

let myName = "Baalak";

let nickName = myName;

nickName = "Baalu";

// console.log(myName);   // Baalak
// console.log(nickName); // Baalu




// 2. Heap Memory (stored only Non-Primitive Date Types) 



let user1 = {
    email: "Baalak125@gmail.com",
    upiId: "Baalak125@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com";

console.log(user1.email);
console.log(user2.email);




