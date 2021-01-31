// 1. Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// Uitkomst: 3, 4, 5 geeft 12
// Uitkomst: 11, 3, 9 geeft 23
function sum(a, b, c) {
    return sum;
}

console.log(sum(3,4, 5));
console.log(sum(11,3, 9));


// 2. Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// Uitkomst:  "abra", "cadabra" geeft "abracadabra"
function magic(first, second) {
    return first + second;
}

const outcomeMagic = magic("abra", "cadabra");

console.log(outcomeMagic);


// 3. Schrijf een functie die twee parameters verwacht: een woord en een karakter
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


// 4. Schrijf een functie die een array van strings verwacht. De functie geeft
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


// 5. Schrijf een functie die een array van strings verwacht en een gezamenlijke groet teruggeeft
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
console.log(thirdArray)