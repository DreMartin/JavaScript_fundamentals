// // Gold Level

// // Write JavaScript to print out a line to the console that displays 
// the number of brothers you have, and then write print out another 
// line to the console that displays the number of sisters you have. 
// Then, write more JavaScript to print out the year of your birth.

// // Blue Level

// // Perform the Gold challenge, and then write more JavaScript to 
// print out a line to the console that adds the number of brothers to 
// the number of sisters, and displays the result. Then, write a line that 
// subtracts your birth year from the current year, and displays the result.

// // Red Level

// // Perform the Blue challenge, and then write a single line of 
// JavaScript that will print to the console a sentence of this format:
// // I have X siblings, and it's been X years since the year I was born
// // Where X is calculated as you did in the Blue challenge. 
// Do not hard-code the answer to X, the JavaScript should calculate 
// the final answer.



let brothers = 2
let sisters = 0
let birthDate 

birthYear = 1981

console.log("I have " + brothers + " brothers.");
console.log("I have " + sisters + " sisters.")
console.log("I was born in " + birthYear)

let siblings = (brothers + sisters)

console.log("I have a total of: " + siblings + " siblings")

let currentYear = 2018

console.log(currentYear - birthYear)

// concatenation

console.log("I have " + siblings + " siblings, and it's been " + (currentYear - birthYear) + " years since the year I was born.")

// interpolation

console.log(`I have ${siblings} siblings, and it's been ${currentYear - birthYear} years since the year I was born.`)

