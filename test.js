//import the fuonction sum from the app.js

// import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

// one euro is:
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.5833333 yens", function() {
    //import the function from app.js
    const {fromDollarToYen} = require('./app.js')
    
    // this is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(373.04166655); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0.00625488663 punds", function() {

const {
        fromYenToPound
    } = require('./app.js')

    expect(fromYenToPound(3.5)).toBe(0.021892103205000003); 
})