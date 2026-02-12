let a =300
if (true){
    let a = 10 // ye a sirf under me he defined hai jo ki sahi hai lekin var ka use hota hai bahar v same declare ho jata 
    const b = 20
    //console.log("inner a = ", a);
}    

//console.log(a);

// nested scope

 function one(){
    const username = "Light"

    function two(){
        const website = "yooutube"
        console.log(username); // Light  
    }
    console.log(website); // youtube X, function ke bahar access nahi kar sakte hai 

   two() // youtube Light => sirf light print hua qki console sirf light ko bola gya tha 
 }

 one() // kuch print nahi hoga qki isme kisi ko print hone ke liye bola he nahi gya hai   