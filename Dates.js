// Dates and Times

let mydate = new Date();
console.log(mydate); // 2026-02-10T04:23:38.026Z
console.log(mydate. toString()); // Tue Feb 10 2026 09:52:51 GMT+0530 (India Standard Time)

console.log(mydate.toDateString()) // Tue Feb 10 2026

console.log(mydate.toTimeString()) //09:57:34 GMT+0530 (India Standard Time)

console.log(mydate.toLocaleDateString()) //10/2/2026

console.log(mydate.toISOString()) //2026-02-10T04:29:21.807Z

console.log(mydate.toJSON()); //2026-02-10T04:29:21.807Z

console.log(mydate.toLocaleString()); //10/2/2026, 10:01:47

console.log(mydate.toLocaleTimeString()) // 10:03:31

console.log(mydate.getMonth()); // 1


// Practice Question

let myCreatedDate = new Date(2025, 0, 21 )
console.log(myCreatedDate.toString()); //Tue Jan 21 2025 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDate.toLocaleString()); // 21/1/2025, 00:00:00

let mynewDate = new Date ("01-13-2026"0.)
console.log(mynewDate.toLocaleString());