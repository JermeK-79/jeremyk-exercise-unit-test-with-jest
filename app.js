const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(amtOfEuros) {
    return amtOfEuros * oneEuroIs["USD"];
}

function fromDollarToYen (amtOfDollars) {
    let amtOfEuros = amtOfDollars / oneEuroIs["USD"];
    return amtOfEuros * oneEuroIs["JPY"];
}

function fromYenToPound(amtOfYen) {
    let amtOfEuros = amtOfYen / oneEuroIs["JPY"];     
    return amtOfEuros * oneEuroIs["GBP"]; 
}

// console.log(fromEuroToDollar(50));
// console.log(fromDollarToYen(10));  
// console.log(fromYenToPound(1000));

module.exports = { 
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
 };