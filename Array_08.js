const array = [4, 5, 8, 2, 9, 0, 1];

const mixarray = [4, 5, 7, 2, 0, "Baalak", "Light"];

console.log(array[2]);
console.log(array);

// array method push or POP

array.push("raaj");
array.push("jail");
console.log(array);

array.pop(); // only last element pop
console.log(array);

let newArray = [0, 1, 2, 3, 4, 5];

// -------------------- unshift or shift --------------------------

newArray.unshift(9); // array me number front se add karta hai

newArray.shift(); // array me element front se remove karta hai 

console.log(newArray);


console.log(array.join()); // array ko string me convert kar deta hai 

// slice, splice
let myArr = [0, 1, 3, 4, 5, 6];
console.log("A ", myArr); // [A 0, 1, 3, 4, 5, 6]

// use slice 

const myn1 = myArr.slice(1, 3)

console.log(myn1);  // [ 1, 3 ]
console.log("B ", myArr); // B  [ 0, 1, 3, 4, 5, 6 ]


// splice 
const myn2 = myArr.splice(1, 3)
console.log(myn2); // [ 1, 3, 4 ]
console.log("C ", myArr); // C  [ 0, 5, 6 ]

// Array part -02 

const Marvel_heros = ["thor", "ironman", "spiderman"]
const Dc_heros =["superman", "flash", "batman"];

// merge both array

Marvel_heros.push(Dc_heros);

console.log(Marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] very wrong method
console.log(Marvel_heros[3][1]); // array ke andar ka array nikalne ke liye 

const all_heors = Marvel_heros.concat(Dc_heros);
console.log(all_heors);

const all_new_heros = [...Marvel_heros, ...Dc_heros] // best use this 
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [8, 9]]

const real_another_array = another_array.flat(Infinity)

console.log("real another array" , real_another_array);


console.log(Array.isArray("Light")) // check karta hai array hai ya nahi 
console.log(Array.from("Light")) // "from" element ko array banata hai 

console.log(Array.from({name: "Light"})) // array nahi bana payega to empty [ ] array deta hai (It's very imp. for interview)


let score1 = 100
let score2 = 200 
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]