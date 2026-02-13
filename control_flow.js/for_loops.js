// for loops 

for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        // console.log("5 is the best number");

    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + ' * ' + j + ' = ' + i*j);
        // console.log(`${i} x ${j} = ${i*j}`);

    }
}

// looping in array

let myArray = ["Baalak", "Light", "Raaj"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log((element));

}

// break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // loop wahi pr ruk jayega

    }
    console.log(`Value of i is ${index}`)

}
// continue (1 baar bs skip kr deta hai)
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // 5 ko skip kar dega 

    }
    console.log(`Value of i is ${index}`)

}





