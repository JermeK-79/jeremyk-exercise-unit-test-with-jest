// const {sum} = require('./app.js');

// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14,9);
//     expect(total).toBe(23);
// });

// const {ratio} = require('./app.js');

// test ('divides 64 / 4 to equal 16', () => {
//     let outcome = ratio(64,4);
//     expect(outcome).toBe(16);
// });

// const {difference} = require('./app.js');

// test ('subtracts 24 - 10 to equal 14', () => {
//     let result = difference(24,10);
//     expect(result).toBe(14);
// });

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})