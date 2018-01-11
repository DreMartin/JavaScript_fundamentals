// Functions Challenges

// Gold Level

// Write a function that will print a sentence to the console, such as:
// My name is John Smith.
// Name the function printInfo. It should take 2 arguments, your 'firstName' and your 'lastName'.


// function printInfo(firstName, lastName){
//     console.log(`My name is ${firstName} ${lastName}.`)
// }

// printInfo('Andres', 'Martin')

// Blue Level

// Perform the Gold challenge, and now re-write your code to RETURN your full name "John Smith", instead of 
// printing it to the console. Re-write your console.log() outside of your function, to call the 
// printInfo function so it prints the same sentence.


// function printInfo(firstName, lastName){
//     return `${firstName} ${lastName}`;

// printInfo('Andres', 'Martin');

// console.log(`My name is ${printInfo('Andres', 'Martin').`})
// }


// Red Level

// Perform the Blue challenge, and now re-write your function to accept a 3rd argument, 
// a "title" (such as Mr. or Mrs., or even Queen or Prince!). Make this argument optional, 
// if none is supplied then there is no title included in the name. Print 2 sentences, 
// one without a title and the other with a title:
// My name is John Smith.
// My name is Mr. John Smith.

// function printInfo(firstName, lastName, title){
//     if(title == undefined) {
//         return `${firstName} ${lastName}`
//     } else {
//         return `${title} ${firstName} ${lastName}`
//     }
// }

// printInfo('Andres', 'Martin');

// console.log(`My name is ${printInfo('Andres', 'Martin')}.`)
// console.log(`My name is ${printInfo('Andres', 'Martin', 'King of Spain')}.`)

// IF WE WANT TO DO IT WITH TERNARYS


function printInfo(firstName, lastName, title){
    return title ? `${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`
}

console.log(`My name is ${printInfo('Andres', 'Martin')}.`)
console.log(`My name is ${printInfo('Andres', 'Martin', 'King of Spain')}.`)