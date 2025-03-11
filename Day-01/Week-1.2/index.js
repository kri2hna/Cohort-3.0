//Variables => Variables are used to store data. In JavaScript, we declear variables using var,let or const.

let name = "Brendan";  //Variable that can be reassigned
const age = 30;       //Constant variable that cannot be reassigned
var isMale = true;   //Older way to declear variables,function-scoped


//Assignment #1 => Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

const myHeightInCentimeters = 192.024;
console.log(myHeightInCentimeters);  //192.024

var myFavColor = "Orange";
console.log(myFavColor);  //Orange

let likePizza = false;
console.log(likePizza);  //false


//Data types

let number = 12; //Number
let string = "Namaste"; //String
let isActive = true;  //Boolean
let numbers = [1,2,3] //Array
let info = {                    //Object
    firstName : "Bhupender",
    latName : "Jogi",
    age : 16
}                     


//Operators

let sub = 10 - 2;         //Arithmatic operator
let isEqual = (10 == 2); //Comparison operator
let isTrue = (true || false); //Logical operator


//Functions

//Function Declaration
function greet(name){
    console.log("Namaste," + name);
}

//Function call
let message = greet("Donald");  //Namaste,Donald


// Assignment #2 => Write a function sum that finds the sum of two numbers.Side quest - Try passing in a string instead of a number and see what happens?

function add(num1,num2){
    return num1 + num2;
}
 
console.log(add(10,2));       //12
console.log(add("10","2"));   //102
console.log(add("10",2));     //102
console.log(add(10,"2"));     //102
console.log(add(10,"a"));     //10a
console.log(add("a",10));     //a10
console.log(add("a","b"));    //ab


//Assignment #2 => Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){

    //Conditional Statements
    if(age >= 18){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

canVote(18); //You are eligible to vote
canVote(21); //You are eligible to vote
canVote(15); //You are not eligible to vote


//Loops

//For loop

for(let i = 0; i <= 7; i++){
    console.log(i);  //output => 1 to 7 
}

//While loop

let i = 0;
while(i<=7){
    console.log(i); //output => 1 to 7
    i++;
}


// Assignment #4 => Write a function called sum that finds the sum from 1 to a number

let result = 0;

function sum(num){
    for(let i = 1;i <= num; i++){
        result = result + i;
    }
    return result;
}

console.log(sum(3));  //6


//Objects  => An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.

let user = {
    name : "Donald",
    age : 21,
    gender : "Male",

}

console.log("Donald's age is " + user.age); //Donald's age is 21

//Assignment #5 => An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.

function Greet(obj){
    console.log(`Namaste ${obj.name},you are ${obj.age} years old?`)
}

Greet(user);  //Namaste Donald,you are 21 years old?


// Assignment #6 => Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs harkirat, your age is 21)

function sayHi(obj){
    if(obj.gender === "Male"){
        console.log(`Hi Mr ${obj.name},your age is ${obj.age}`);
    }
    else{
        console.log(`Hi Mrs ${obj.name},your age is ${obj.age}`);
    }
}

sayHi(user); //Hi Mr Donald,your age is 21


// Assignment #7 => Also tell the user if they are legal to vote or not

function sayHello(obj){
    if(obj.gender === "Male" && age >= 18){
        console.log(`Hi Mr ${obj.name},your age is ${obj.age} and you are eligible to vote.`);
    }
    else{
        console.log(`Hi Mrs ${obj.name},your age is ${obj.age} and you are eligible to vote.`);
    }
}

sayHello(user); //Hi Mr Donald,your age is 21 and you are eligible to vote.



//Arrays => Arrays let you group data together

const netaLog = ["Modi","Putin","Donald"];
console.log(netaLog.length); //3
console.log(netaLog[0]); //Modi


// Assignment #8 => Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let allNums = [1,2,3,4,5,6,7];

function evenNums(nums){
    return nums.filter(num => num % 2 === 0);
}

let evenNumbers = evenNums(allNums);
console.log(evenNumbers); //[ 2, 4, 6 ]



const Users = [{
    name: "Modi",
    age: 21
}, {
    name: "Shah",
    age: 22
}
]

const user1 = Users[0];
console.log(user1);     //{ name: 'Modi', age: 21 }

const user1Age = Users[0].age;
console.log(user1Age);  //21



// Assignment #9 => Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


const netaLogs = [{
    name: "Modi",
    age: 21
}, 
{
    name: "Shah",
    age: 22
},
{
    name : "yogi",
    age : 18
}
]

function badeNeta(users) {
    return users.filter(user => user.age > 18);
}

console.log(badeNeta(netaLogs)); //[ { name: 'Modi', age: 21 }, { name: 'Shah', age: 22 } ]



//Object of Objects

const neta = {
	name: "Modi",
	age: 21,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = neta.address.city;
console.log(city);


// Assignment #10 => Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male

function filterAdultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
}

const users = [
    { name: "Alice", age: 17, gender: "female" },
    { name: "Bob", age: 20, gender: "male" },
    { name: "Charlie", age: 18, gender: "male" },
    { name: "David", age: 25, gender: "male" },
    { name: "Emma", age: 22, gender: "female" }
  ];
  
  console.log(filterAdultMales(users));
  
