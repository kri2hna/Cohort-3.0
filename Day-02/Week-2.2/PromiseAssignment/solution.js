// #Assignment
// Try to create a promisified version of 
// setTimeout
// fetch 
// fs.readFile


// setTimeout
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function exampleTimeout() {
  try {
    await delay(1000);
    console.log('1 second passed');
  } catch (error) {
    console.log("error");
  }
}


// fetch 
// Fetch is already promise-based
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Request failed:', error);
    }
}




// fs.readFile
const fs = require('fs');
const { promisify } = require('util');
const readFilePromise = promisify(fs.readFile);

async function readFileExample() {
  try {
    const data = await readFilePromise('./Day-02/Week-2.2/PromiseAssignment/file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}