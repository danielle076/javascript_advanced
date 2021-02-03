// 1. Schrijf een functie die een naam verwacht en een groet teruggeeft.
// Uitkomst: "Nova" geeft "Hoi Nova!"
// Uitkomst: "Nick" geeft "Hoi Nick!"
function greet(name) {
    return "Hoi " + name + "!";
}

const greetNova = greet("Nova");
const greetNick = greet("Nick");

console.log(greetNova);
console.log(greetNick);


// 2. Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// Uitkomst: 3, 4, 5 geeft 12
// Uitkomst: 11, 3, 9 geeft 23
function sum(a, b, c) {
    return sum;
}

console.log(sum(3,4, 5));
console.log(sum(11,3, 9));


// 3. Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// Uitkomst:  "abra", "cadabra" geeft "abracadabra"
function magic(first, second) {
    return first + second;
}

const outcomeMagic = magic("abra", "cadabra");

console.log(outcomeMagic);


// 4. Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// Uitkomst: "bril", "*" geeft "*bril*"
// Uitkomst: "beep", "_" geeft "_beep_"
// Uitkomst: "kaas", "Q" geeft "QkaasQ"
function wrapsWord(word, character) {
    return character + word + character;
}

const asterisk = wrapsWord("bril", "*");
const underscore = wrapsWord("beep", "_");
const q = wrapsWord("kaas", "Q");

console.log(asterisk);
console.log(underscore);
console.log(q);


// 5. Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// Uitkomst: 1 geeft 60
// Uitkomst: 3 geeft 180
// Uitkomst: 23 geeft 1840
function getSecondsFromMinutes(minutes) {
    const seconds = minutes * 60;
    return seconds;
}

const output1 = getSecondsFromMinutes(1);
const output3 = getSecondsFromMinutes(3);
const output23 = getSecondsFromMinutes(23);

console.log(output1);
console.log(output3);
console.log(output23);


// 6. Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul.
// Uitkomst: -3 geeft false
// Uitkomst: 0 geeft false
// Uitkomst: 300 geeft true
function isBiggerThanZero(number) {
    const biggerThanZero = number > 0;
    return biggerThanZero;
}

const outputMinus3 = isBiggerThanZero(-3);
const output0 = isBiggerThanZero(0);
const output300 = isBiggerThanZero(300);

console.log(outputMinus3);
console.log(output0);
console.log(output300);


// 7. Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// Uitkomst: 1 en 23 geeft false
// Uitkomst: 8 en 92 geeft false
// Uitkomst: 89 en 14 geeft true
function isBiggerThan100Together(number1, number2) {
    const sum = number1 + number2;
    const biggerThan100 = sum > 100;
    return biggerThan100;
}

const output123 = isBiggerThan100Together(1, 23);
const output892 = isBiggerThan100Together(8, 92);
const output8914 = isBiggerThan100Together(89, 14);

console.log(output123);
console.log(output892);
console.log(output8914);


// 8. Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden voor gebruiken.
// Uitkomst: ["abra", "cadabra"] geeft "abracadabra"
// Uitkomst: ["a", "b", "c"] geeft "abc"
function lettersTogether(wordArray) {
    let output = "";

    for (let i = 0; i < wordArray.length; i++) {
        output = output + wordArray[i];
    }

    return output;
}

let abc = lettersTogether(["a", "b", "c"]);
let abracadabra = lettersTogether(["abra", "cadabra"]);

console.log(abc);
console.log(abracadabra);


// 9. Schrijf een functie die een array van strings verwacht en een gezamenlijke groet teruggeeft
// Uitkomst: ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// Uitkomst: ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// Uitkomst: ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"
function greeting(stringsArray) {
    let greeting = "Hoi ";

    for (let i = 0; i < stringsArray.length; i++) {
        if (i === stringsArray.length - 1) {
            return greeting = greeting + " en " + stringsArray[i] + "!";
        }
        if (stringsArray.length === 2 || i === stringsArray.length - 2) {
            greeting = greeting + stringsArray[i];
        } else {
            greeting = greeting + stringsArray[i] + ", ";
        }
    }

    return greeting;
}

let firstArray = greeting (["Piet", "Henk"]);
let secondArray = greeting (["A", "B", "C", "D", "E", "F"]);
let thirdArray = greeting (["Nick", "Nova", "Mitchel", "Arjen"])

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);