// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {

    // console.log(num)
    
}

const greeting = "Hello world";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}


// Maps
// 👆👆 Mpas unique value store karne ke liye hote hai or sirf 1 value 1 baar he print ya store hota hai..

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India") // ye value store to ho gya hai lekin prind nahi hoga

// console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);
    
}


// object pe for-of loop kaam nahi karte hai 
const myObject = {
    'geme1': 'Pubg',


}

//==================== for Each loop (Most uning) ====================

// Method  1 
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val) {
        console.log(val);

} )

// Method 2 

coding.forEach((item) => {
    console.log("Method 2 ", item );
})

// Method 03 

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);


// object in array (very use in data base)

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
     {
        languageName: "c++",
        languageFileName: "cpp"
    },
     {
        languageName: "java",
        languageFileName: "j"
    }
]

mycoding.forEach((item) => {

    console.log(item.languageName);
})