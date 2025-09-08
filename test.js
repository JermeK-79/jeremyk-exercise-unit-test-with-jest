// test("One euro should be 1.07 dollars", function() {
//     const { fromEuroToDollar } = require('./app.js');

//     const dollars = fromEuroToDollar(3.5);
//     const expected = 3.5 * 1.07; 
    
//     expect(dollars).toBe(expected); 
// });


const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

test("One euro should be converted correctly to dollars", function(){
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be converted correctly to yen", function() {
    const yen = fromDollarToYen(1);

    const expected = (1 / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    expect(yen).toBe(expected);
});

test("One yen should be converted correctly to pounds", function() {
    const pounds = fromYenToPound(1);
 
    const expected = (1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    expect(pounds).toBe(expected);
});