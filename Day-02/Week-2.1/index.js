// Normal Functions in JS 

// Find sum of two numbers 
function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(ans);


// Find sum from 1 to 100 
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const res = sum(100);
console.log(res);


// Synchronous Code 
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);


// I/O heavy operations

// Task 1
// Step-1:- Create a file in there (text1.txt) with some text inside
// Step-02:- Write the code to read a file synchronously

const fs = require("fs");

const contents = fs.readFileSync("./Day-02/text1.txt", "utf-8");
console.log(contents);

// Task 2
// Step-1:- Create another file (text2.txt)
// Step-2:- Write the code to read the other file synchronously

const fs = require("fs");

const contents2 = fs.readFileSync("./Day-02/text2.txt", "utf-8");
console.log(contents2);


// I/O bound tasks vs CPU bound tasks 

// CPU bound tasks
let answer = 0;
for (let i = 1; i <= 1000000; i++) {
	answer = answer + i
}
console.log(answer);	


// I/O bound tasks
const fs = require("fs");

const content = fs.readFileSync("./Day02/text2.txt", "utf-8");
console.log(content);


// Synchronously (One by one)
const fs = require("fs");

const contentss = fs.readFileSync("./Day02/text1.txt", "utf-8");
console.log(contentss);

const contentss2 = fs.readFileSync("./Day02/text2.txt", "utf-8");
console.log(contentss2);

const contents3 = fs.readFileSync("./Day02/text2.txt", "utf-8");
console.log(contents3);


// Start all 3 tasks together, and wait for them to finish.
const fs = require("fs");

fs.readFile("./Day02/text1.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("./Day02/text2.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("./Day02/text1.txt", "utf-8", function (err, contents) {
  console.log(contents);
});




// Functional arguments


// Write a calculator program that adds, subtracts, multiplies, divides two arguments.

// Approach #1
// Calling the respective function
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(sum(1, 2))


// Approach #2
// Passing in what needs to be done as an argument.
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))



//   Asynchronous code, callbacks
const fs = require("fs");

fs.readFile("./Day02/text1.txt", "utf-8", function (err, contents) {
  console.log(contents);
});


// setTimeout
// setTimeout is another asynchronous function that executes a certain code after some time
function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");