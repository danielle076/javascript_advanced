// METHODE
// Een methode is een functie die een onderdeel is van een object.

// VOORBEELD OBJECT & METHODE: CONSOLE.LOG
// console is een object.
// log is een functie die in het object zit: dat noem je een methode.
console.log();

// ARRAY METHODS
// concat() - voegt twee arrays samen.
// includes() - checkt of één van de items in de array een bepaalde waarde bevat, zoals “cat” of het getal 2.
// indexOf() - checkt het indexnummer van het item in de array met een bepaalde waarde.
// join() - maakt een string van alle items in de array door ze achter elkaar te plakken.
// push() - "pusht" een nieuw item, ofwel: voegt een item toe aan het einde van de array.
// reverse() - draait de volgorde van de array om.
// pop() - verwijderd het laatste item in de array en returned deze waarde.
// shift() - verwijderd het eerste item in de array en returned deze waarde.
// slice() - maakt een referentieloze kopie van een deel van de array. De originele array wordt niet aangepast.
// splice() - voegt een item toe of vervangt een item op basis van indexnummer in de array.

// DATE METHODS
// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
// getDay() - geeft de dag van de week (0 - 6).
// getHours() - geeft het uur (0 - 23).
// getMinutes() - geeft de minuten (0 - 59).
// getMonth() - geeft de maand (0 - 11).
// getSeconds() - geeft het aantal seconden (0 - 59).

// MATH METHODS
// Math.PI is een property en geeft pi terug (3.141592653589793).
// Math.round() rondt een getal af naar het dichtstbijzijnde hele getal.
// Math.sqrt() geeft de wortel van een getal terug.
// Math.ceil() rondt een getal naar boven af.
// Math.floor() rondt een getal naar beneden af.
// Math.random() genereert een random getal tussen 0 en 1.

// Math.PI is een property en geeft pi terug (3.141592653589793).
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(Math.PI); // geeft 3.141592653589793
console.log(calculateCircumference(10)); // geeft 62.83185307179586

// Math.round() rondt een getal af naar het dichtstbijzijnde hele getal.
console.log(Math.round(0.9)); // geeft 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // geeft 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); // geeft -5 -5 -6

// Math.sqrt() geeft de wortel van een getal terug.
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4)); // geeft 5
console.log(calcHypotenuse(5, 12)); // geeft 13
console.log(calcHypotenuse(0, 0)); // geeft 0

// Math.ceil() rondt een getal naar boven af.
console.log(Math.ceil(.95)); // geeft 1
console.log(Math.ceil(4)); // geeft 4
console.log(Math.ceil(7.004)); // geeft 8
console.log(Math.ceil(-7.004)); // geeft -7

// Math.floor() rondt een getal naar beneden af.
console.log(Math.floor(5.95)); // geeft 5
console.log(Math.floor(5.05)); // geeft 5
console.log(Math.floor(5)); // geeft 5
console.log(Math.floor(-5.05)); // geeft -6

// Math.random() genereert een random getal tussen 0 en 1.
// Als we een dobbelsteenworp simuleren, hebben we 6 mogelijkheden: een willekeurig getal tussen 1 en 6. Hoe maken we
// van dit willekeurige getal met Math.random een getal tussen 1 en 6?
// We vermenigvuldigen het eerst met 6, zodat we een getal krijgen. Vervolgens nemen we dat getal en voeren we Math.floor
// uit. Je ziet hier dat “n” wordt gebruikt als invoer voor deze functie floor, die naar beneden afrondt naar het
// dichtstbijzijnde gehele getal.
let n = Math.random();
n = n * 6;
n = Math.floor(n);
console.log(n);

// Als we de code uitvoeren, dan kun je zien dat we getallen tussen 0 en 5 krijgen. Het bereikt nooit 6.
// Om het te verhogen naar 6 hoeven we er alleen maar + 1 aan toe te voegen.
n = Math.floor(n) +1;

// STRING METHODS
// toUpperCase() - veranderd alle letters in hoofdletters.
// toLowerCase() - veranderd alle letters in kleine letters.
// charAt() - returned het karakter dat op het opgevraagde indexnummer staat.
// indexOf() - returned het indexnummer van de plek waarop het opgevraagde karakter het eerst voorkomt.
// lastIndexOf() - returned het indexnummer van de plek waarop het opgevraagde karakter het laatst voorkomt.
// substring() - returned alle karakters tussen de meegegeven indexnummers.
// split() - hakt de string in stukjes op basis van een conditie en returned de stukjes in een array.
// trim() - verwijderd spaties aan het begin en einde van een string.
// replace() - verwijderd het laatste item in de array en returned deze waarde.
// includes() checkt of de string een specifiek karakter(s) bevat.

// Op het moment dat je met de methodes en properties van het String object gaat werken, krijgt ieder karakter in de
// string automatisch een index nummer toegewezen. Deze indexnummers beginnen altijd bij 0, en niet bij 1. Net zoals
// bij arrays.

// toUpperCase() - veranderd alle letters in hoofdletters.
const cuteSentence = "What greater gift than the love of a cat.";
console.log(cuteSentence.toUpperCase()); // geeft WHAT GREATER GIFT THAN THE LOVE OF A CAT.

// toLowerCase() - veranderd alle letters in kleine letters.
const niceSentence = "What greater gift than the love of a cat.";
console.log(niceSentence.toLowerCase());// geeft what greater gift than the love of a cat.

// charAt() - returned het karakter dat op het opgevraagde indexnummer staat.
const charSentence = "What greater gift than the love of a cat.";
const index = 5;
console.log(`The character at index ${index} is ${charSentence.charAt(index)}.`); // geeft The character at index 5 is g

// indexOf() - returned het indexnummer van de plek waarop het opgevraagde karakter het eerst voorkomt.
const paragraph = "What greater gift than the love of a cat. A cat will be your friend but never your slave.";
const searchTerm = "cat";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}.`);
// geeft The index of the first "cat" from the beginning is 37
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}.`);
// geeft The index of the 2nd "cat" is 44

// lastIndexOf() - returned het indexnummer van de plek waarop het opgevraagde karakter het laatst voorkomt.
const paragraphLast = "What greater gift than the love of a cat. A cat will be your friend but never your slave.";
const searchTermLast = "cat";

console.log(`The index of the first "${searchTermLast}" from the end is ${paragraphLast.lastIndexOf(searchTermLast)}.`);
// geeft The index of the first "cat" from the end is 44

// substring() - returned alle karakters tussen de meegegeven indexnummers.
const str = "Beauty";

console.log(str.substring(1, 3)); // geeft ea
console.log(str.substring(2)); // geeft auty

// split() - hakt de string in stukjes op basis van een conditie en returned de stukjes in een array.
const anotherStr = "What greater gift than the love of a cat.";

const words = anotherStr.split(' ');
console.log(words[3]); // geeft than

const chars = anotherStr.split('');
console.log(chars[8]); // geeft a

const strCopy = anotherStr.split();
console.log(strCopy); // geeft [ 'What greater gift than the love of a cat.' ]

// trim() - verwijderd spaties aan het begin en einde van een string.
const greeting = "   Hello world!   ";
console.log(greeting); // geeft "   Hello world!   ";
console.log(greeting.trim()); // geeft "Hello world!";

// replace() - verwijderd het laatste item in de array en returned deze waarde.
const substitute = "What greater gift than the love of a cat. A cat will be your friend but never your slave.";

console.log(substitute.replace( "cat", "dog"));
// geeft What greater gift than the love of a dog. A cat will be your friend but never your slave.

const regex = /cat/i;
console.log(substitute.replace(regex, "rabbit"));
// geeft What greater gift than the love of a rabbit. A cat will be your friend but never your slave.

// includes() checkt of de string een specifiek karakter(s) bevat.
const checkLove = "What greater gift than the love of a cat.";
const word = "love";

console.log(`The word "${word}" ${checkLove.includes(word) ? 'is' : 'is not'} in the sentence.`);
// geeft The word "love" is in the sentence