// // Conditionals (if-else) Challenges

// // Gold Level

// // Pretend you own an online shop and want to display a message informing the 
// customer whether they qualify for free shipping (only orders equal to or over $100), 
// or if they need to pay the $20 shipping charge.
// // Set a variable named orderTotal equal to 120. Write an if/else check to print out
// a sentence telling the user 
// // You qualify for free shipping! 
// // or 
// // You need to pay for shipping. 
// // based on the order total.

// let orderTotal = 120;

// if (orderTotal >= 100) {
//     console.log('You qualify for free shipping!.');
// } else { 
//     console.log('You need to pay for shipping based on the order total.');
// }

// // Blue Level

// // Perform the Gold challenge, but now create a new variable named limitForFreeShipping 
// and set that equal to 100. Re-write the Gold challenge, but now compare the value of orderTotal 
// against the limitForFreeShipping.

// let orderTotal = 120;
// let limitForFreeShipping = 100;

// if (orderTotal >= limitForFreeShipping) {
//     console.log('You qualify for free shipping!.');
// } else { 
//     console.log('You need to pay for shipping based on the order total.');
// }

// // Red Level

// // Perform the Blue challenge, and now create a new boolean variable named discounted and set 
// it equal to true. When an order is discounted, it is not eligible for free shipping. Re-write your logic checks accordingly.

let orderTotal = 120;
let limitForFreeShipping = 100;
let discounted = true

if (orderTotal >= limitForFreeShipping && !discounted) {
    console.log('You qualify for free shipping!.');
} else { 
    console.log('You need to pay for shipping based on the order total.');
}