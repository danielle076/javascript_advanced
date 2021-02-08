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
    return a + b + c;
}

console.log(sum(3, 4, 5));
console.log(sum(11, 3, 9));


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

let firstArray = greeting(["Piet", "Henk"]);
let secondArray = greeting(["A", "B", "C", "D", "E", "F"]);
let thirdArray = greeting(["Nick", "Nova", "Mitchel", "Arjen"])

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);


// 10. Schrijf een functie die een woord verwacht en dit omgedraaid teruggeeft. Je kunt dit zowel handmatig als met
// ingebouwde string- en array methoden doen.
// Uitkomst: "koekje" geeft "ejkeok"
// Uitkomst: "vrienden" geeft "nedneirv"
function reverseString(string) {
    const stringArray = string.split("");
    const reversedArray = stringArray.reverse();
    const outputString = reversedArray.join("");
    return outputString;
}

const outputKoekje = reverseString("koekje");
const outputVrienden = reverseString("vrienden");

console.log(outputKoekje, outputVrienden);


// 11. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// Uitkomst: "lepel" geeft true
// Uitkomst: "madam" geeft true
// Uitkomst: "vrienden" geeft false
function isPalinDroom(word) {
    // CHEESE, you can do this in fancier ways I am sure
    const reverseWord = reverseString(word);
    const palindroom = reverseWord === word;
    return palindroom;
}

const outputLepel = isPalinDroom("lepel");
const outputMadam = isPalinDroom("madam");
const outputVrienden2 = isPalinDroom("vrienden");

console.log(outputLepel, outputMadam, outputVrienden2);


// 12. Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// Uitkomst: "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// Uitkomst: "Hans is zijn mondkapje vergeten" en "a" geeft 2
function countLetterInSentence(sentence, letter) {
    let count = 0;
    for (let index = 0; index < sentence.length; index++) {
        const letterInSentence = sentence[index];
        const isSameLetter = letterInSentence === letter;
        if (isSameLetter) {
            count = count + 1;
        }
    }
    return count;
}

const outputCount = countLetterInSentence(
    "Hans en marietje lopen naar de supermarkt",
    "e"
);

const outputCount2 = countLetterInSentence(
    "Hans is zijn mondkapje vergeten",
    "a"
);

console.log(outputCount, outputCount2);


// 13. Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// Uitkomst: lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// Uitkomst: lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]
function lastEntry(array, count = 1) {
    const firstIndexToInclude = array.length - count;
    // using array slice to "cut the array in half" at the right index
    const outputArray = array.slice(firstIndexToInclude);
    return outputArray;
}

const outputArr1 = lastEntry([3, 6, 9, 17, 4, 6, 25, 4]);
const outputArr2 = lastEntry([46, 65, 34, 204, 190, 89], 3);

console.log(outputArr1, outputArr2);


// 14. Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste getal in de array
// terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// Uitkomst: [3, 6, 9, 17, 4, 6, 25] geeft 25
// Uitkomst: [46, 65, 34, 204, 190, 89] geeft 204
function highestNumber(numberArray) {
    let highestSoFar = 0;
    for (let index = 0; index < numberArray.length; index++) {
        const numberInLoop = numberArray[index];
        const isHighestSoFar = numberInLoop > highestSoFar;
        if (isHighestSoFar) {
            highestSoFar = numberInLoop;
        }
    }

    return highestSoFar;
}

const highest1 = highestNumber([3, 6, 9, 17, 4, 6, 25]);
const highest2 = highestNumber([46, 65, 34, 204, 190, 89]);

console.log(highest1, highest2);


// 15. Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

// optie 1
let output = [];

function fizzBuzz() {

    for (let count = 1; count < 101; count++) {

        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        console.log(output);
    }
}

fizzBuzz();

// optie 2
function fizzBuzz2() {
    for (let index = 1; index <= 100; index++) {
        const number = index;
        const divisibleBy3 = number % 3 === 0;
        const divisibleBy5 = number % 5 === 0;

        if (divisibleBy3 && !divisibleBy5) {
            console.log("Fizz");
        } else if (divisibleBy5 && !divisibleBy3) {
            console.log("Buzz");
        } else if (divisibleBy3 && divisibleBy5) {
            console.log("FizzBuzz");
        } else {
            console.log(number);
        }
    }
}

fizzBuzz2();


// 16. Berekenen aan de hand van iemands leeftijd hoeveel dagen, weken of maanden nog iemand heeft tot hij 90 jaar is.
// Ga er voor deze uitdaging van uit dat er 365 dagen in een jaar zitten, 52 weken in een jaar en 12 maanden in een jaar.
function lifeInWeeks(age) {
    const yearsRemaining = 90 - age;
    const days = yearsRemaining * 365;
    const weeks = yearsRemaining * 52;
    const months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left");
}

lifeInWeeks(12);


// 17. Maak een BMI-calculator. BMI = gewicht (kg) / lengte2 (m2).
// Jouw uitdaging is om een functie te maken die gewicht en lengte als input neemt en de berekende BMI waarde als output
// geeft. De uitvoer moet worden afgerond op het dichtstbijzijnde gehele getal.
// De eerste parameter moet het gewicht zijn en de tweede de lengte.
function bmiCalculator(weight, height) {
    const bmi = weight / (height * height);
    return bmi
}

const bmi = bmiCalculator(70, 1.69);
console.log(Math.round(bmi));