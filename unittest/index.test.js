const numbers = require("./index").numbers;
const magic = require("./index").magic;

test("numbers() function should return the subtract of 2 numbers", function(){

    // ARRANGE (klaarzetten van de data)
    const num1 = 10;
    const num2 = 4;

    // ACT (handelen, functie aanroepen die je wilt)
    const subtract = numbers(num1, num2);

    // ASSERT (beweringen/verwachtingen)
    expect(subtract).toBe(6);
})

test("magic() adds two strings together", function(){

    // ARRANGE (klaarzetten van de data)
    const outcomeMagic = magic("abra", "cadabra");

    // ACT (handelen, functie aanroepen die je wilt)


    // ASSERT (beweringen/verwachtingen)
    expect(outcomeMagic).toBe("abracadabra");
})