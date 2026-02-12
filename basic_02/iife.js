// Immediately Invoked function expression (IIEF)

(function chai(){
    console.log(`DB Connected`);

}) () ; 
// 2 method

((name) => {
    console.log(`DB Connected two $(name)`);
}) ('Baalak')
