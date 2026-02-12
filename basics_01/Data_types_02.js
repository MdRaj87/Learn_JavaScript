/*
Data types tell the computer what kind of data is stored in a variable.

 JavaScript has *8* data types, divided into Primitive and Non-Primitive (Reference) types.

🔹 1. Primitive Data Types (Immutable)

These store single values and are copied by value. 
                    or
Primitive data types are the basic and simple types of data in JavaScript.

1️⃣ Number
2️⃣ String (Used to store text or words.)


Example in code

*/


let age = 20;                   // Number
let name = "Baalak";            // String
let istrue = true;              // Boolean
let result;                     // Undefined 
let scope = null;               // Null--typeof => object
let bigNumber = 1234545n;       // BigInt
let id = Symbol("studentId");   // symbol (Unique)



console.table([age, name,true,null,bigNumber]);

// typeof variables
console.table([typeof age, typeof name,typeof istrue,typeof result, typeof scope, typeof bigNumber, typeof id]);


