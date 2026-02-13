  // arraya prototype reduce 

  const myNums = [1, 2, 3]

//   const myTotal =myNums.reduce(function (acc, currval){
//         console.log(`acc: ${acc} and currva: ${currval}`);
//         return acc + currval
//   }, 0)

  const MyTotal = myNums.reduce((acc, curr) => acc + curr, 0)

  console.log(MyTotal)

  // Real life example (shopping_cart)

  const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "dsa c++",
        price: 2499
    },
    {
        itemName: "web-deev ",
        price: 3499
    },
    {
        itemName: "All course in telegram",
        price: 99
    }
  ]

  const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

  console.log(priceToPay);