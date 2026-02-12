 // falsy Value 

 // false, 0, -0, BigInt zero_n (0n), "", null, undefined , NaN

 // truthy Value 👇👇👇 
 
 // "0", "false", " ", [], {}, function(){}

 const userEmail = [];

 if(userEmail) {
    console.log("Got user email");
    
 }else {
    console.log("Don't have user email");
    
 }
 
// Null coalescing Operator (??): null undefined

 let val1;

 val1 = 5 ?? 10
 val1 = null ?? 10
 val1 = undefined ?? 15

 console.log(val1);

 // ? use case 

 const iceTeaPrice = 100;
 iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")


 