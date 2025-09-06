const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromDollarToYen (dollars) {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];     
    return euros * oneEuroIs["GBP"]; 
}

console.log(fromEuroToDollar(50));
console.log(fromDollarToYen(10));  
console.log(fromYenToPound(1000));

expo