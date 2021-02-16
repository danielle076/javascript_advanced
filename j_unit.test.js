// import j_unit.js
const numbers = require("./j_unit").numbers;
const magic = require("./j_unit").magic;

// Een test doe je in drie stappen:
// - Arrange: klaarzetten van de data
// - Act: handelen, functie aanroepen die je wilt
// - Assert: beweringen/verwachtingen

test("numbers() function should return the subtract of 2 numbers", function(){

    // ARRANGE
    const num1 = 10;
    const num2 = 4;

    // ACT
    const subtract = numbers(num1, num2);

    // ASSERT
    expect(subtract).toBe(6);
})

test("magic() adds two strings together", function(){

    // ARRANGE
    const outcomeMagic = magic("abra", "cadabra");

    // ACT

    // ASSERT
    expect(outcomeMagic).toBe("abracadabra");
})