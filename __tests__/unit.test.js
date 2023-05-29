// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test('Valid phone number should return true', () => {
//     expect(functions.isPhoneNumber('7021139311')).toBe(true);
// });

test('Invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('110240')).toBe(false);
});

 test('Valid email should return true', () => {
     expect(functions.isEmail('cse110isfun@profPowell.com')).toBe(true);
 });

// test('Invalid email should return false', () => {
//     expect(functions.isEmail('Hi')).toBe(false);
// });

test('Valid date should return true', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});

test('Invalid date should return false', () => {
    expect(functions.isDate('1212/00')).toBe(false);
});
