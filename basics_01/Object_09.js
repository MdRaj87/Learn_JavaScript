const jsuser = {

    name: "Light",
    age: 20,
    "location": "Ranchi",

    // [mysymbol] : "myLight", // symbol is tarha se declare hota hai 

    email: "Light18@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(jsuser);

// console.log(jsuser.email) 
// console.log(jsuser["email"]) 
// console.log(jsuser.location)
// console.log(jsuser[mysymbol])

// Object.freeze(jsuser); // isse koi bhi value freez kar sakte hai ya usse const bna sakte hai ko kabhi change nahi hoga 

jsuser.name = "Baalak"; // name change karne ka kosis pr freez lge rahne ke wajah se change nahi hua 

// console.log(jsuser.name);

// function in object 

jsuser.greeting = function () {
    // console.log("Hello Js user");
}
jsuser.greetingTwo = function () {
    // console.log(`Hello Js user, ${this.name}`);
}

// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo());



// Object part-02 --------=====++++++++

// const tinderUser = new Object()  // singleton object 

// not singleton object (bs or koi defference nahi hai // dono me se kisi tarha v declare kar sakte hai) 👇👇👇
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ash"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// object ke under object 

const regularUser = {
    email: "Light03@gmail.com",
    fullname: {
        username: {
            firstname: "Ash",
            middlename: " ",
            lastname: "Ketchum"
        }
    }
}

//console.log(regularUser.fullname.username.firstname); // is tarha se access kar sakte hai nested object value 


// 🌟 Merge object 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// 1st metohd 👇
//const obj3 = { obj1, obj2} // normal but problem
// console.log(obj3); 

// 2nd method 👇👇
//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Most using and easy Method 👇👇👇
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


 const user = [
    {
        id: 1,
        email: "Light03@gmail.com",
        
    },
    {
        id: 1,
        email: "Light03@gmail.com",
        
    },
    {
        id: 1,
        email: "Light03@gmail.com",
        
    },
 ]

 user[1].email
 //console.log(tinderUser); // { id: '123abc', name: 'Ash', isLoggedIn: false } 

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] only keys deta hai 
//console.log(Object.values(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] value deta hai
//console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Ash' ], [ 'isLoggedIn', false ] ] array form me output deta hai 

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // "true" mtlb uske pass LoggedIn naam ka property hai


// Object part-03 

// Restructuring code to help 

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Chai_or_Code"
}

// console.log(course.courseInstructor); // it's best way to write code but but but...

// const {courseInstructor} = course // simple and Experienced coder 

const {courseInstructor: instructor} = course
// const courseInstructor = course.courseInstructor; // line no. 130 or 131 both are same 


// console.log(course);
console.log(instructor);