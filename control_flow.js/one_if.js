// if else 

    const neme = "Light"
    const age = 20;
if (age >= 18) {
    console.log(`You can Vote now 👆`)

} else {
    console.log(`You are under age`)
    
} 

// one more example 

const studentName = "Baalak"
const Total_Marks = 250

if (Total_Marks >= 300 ) {
    console.log(`${Total_Marks} you Rank is 1st division`);
}else if (Total_Marks >= 200) {
    console.log(`${Total_Marks} your Rank is 2nd division`);
}else {
    console.log(`${Total_Marks} Sorry you are fail`) ;
}



// Multiple checking 

 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false 
 const loggedInFromEmail = true 

 if (userLoggedIn && debitCard && 2 == 3) { // && <= and mtlb sare condition true hona chaheye
    console.log("Allow to buy course");
 }

 if (loggedInFromEmail || loggedInFromEmail){  // || <= or mtlb ek v condition true ho to run ho jayega program

    console.log("User llogged in");
 }

