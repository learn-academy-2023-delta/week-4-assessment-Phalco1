// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { log } = require("console")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorArray", () => {
  it('displays colors that matches in the array', ()=>{
    expect(colorArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(colorArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    
  })
})


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) I am creating a function that is named colorArray and setting it to take in an array. Have the placholder array as a parameter.

const colorArray = (array) => {


// 2.) Return have it return the array and the test will pass.

return array
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteCounter", () => {
  it("takes up votes and down votes and returns the end tally.", () => {
    expect(voteCounter(votes1)).toEqual(11)
    expect(voteCounter(votes2)).toEqual(-31)
  })
})

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:

// 1.) Create a function that takes in a parameter(value) 

const voteCounter = (value) => {

// 2.) Have the return value as an agruments and use dot notations to access the values of the upvote and downvote keys and subtract the upvote from the downvote. 

  return value.upVotes - value.downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("newArray", () => {
  it("returns one array with no duplicate values.", () => {
    // const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    // const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(dataTypesArray1, dataTypesArray2).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
  
    

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// // b) Create the function that makes the test pass.

// // Pseudo code:

// 1.) Create a function with the name of newArray and have the parameter of both arrays.

const newArray = (dataTypesArray1, dataTypesArray2) => {

// 2.) Use the spread method on both data types and return the the array with all the data in the variables.

  return [...dataTypesArray1, ...dataTypesArray2]
}

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-4-assessment-Phalco1/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   colorArray
//     ✓ displays colors that matches in the array (3 ms)
//   voteCounter
//     ✓ takes up votes and down votes and returns the end tally. (6 ms)
//   newArray
//     ✕ returns one array with no duplicate values. (1 ms)

//   ● newArray › returns one array with no duplicate values.

//     Expect takes at most one argument.

//       92 |     // const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
//       93 |     // const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     > 94 |     expect(dataTypesArray1, dataTypesArray2).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//          |     ^
//       95 |   })
//       96 | })
//       97 |   

//       at expect (node_modules/expect/build/index.js:93:11)
//       at Object.expect (code-challenges.test.js:94:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.406 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
