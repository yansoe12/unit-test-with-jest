// console.log("Hello World");

// this is my function that sums two numbers
const sum=(a , b )=>{
    return a + b;
}

//just a console.log for ourselves
console.log(sum(7 , 3));


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.00625488663;
    //return the Yen value
    return valueInPound;
}
const fromDollarToYen = function(valueInDollar) {
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 106.5833333;
    //return the dollar value
    return valueInDollar;
}



// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar ,  fromYenToPound , fromDollarToYen};