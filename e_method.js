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

// concat () - voegt twee arrays samen.
const myGirls = ["Daniëlle", "Claudia"];
const myBoys = ["Freckle", "Rik", "Maarten"];
console.log(myGirls.concat(myBoys)) // geeft [ 'Daniëlle', 'Claudia', 'Freckle', 'Rik', 'Maarten' ]

// includes() - checkt of één van de items in de array een bepaalde waarde bevat, zoals “cat” of het getal 2.
const arrayExample = [1, 2, 3];
console.log(arrayExample.includes(2)); // geeft true

const pets = ["bird", "cat", "rat"];
console.log(pets.includes("cat")); // geeft true
console.log(pets.includes("at")); // geeft false

// indexOf() - checkt het indexnummer van het item in de array met een bepaalde waarde.
const chocolates = ["kitkat", "milkyway", "verkade", "m&ms", "mars"];
console.log(chocolates.indexOf("milkyway")); // geeft 1
console.log(chocolates.indexOf("bueno")); // geeft -1, want is niet gevonden

// join() - maakt een string van alle items in de array door ze achter elkaar te plakken.
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // geeft "Fire,Air,Water"
console.log(elements.join("")); // geeft "FireAirWater"
console.log(elements.join(" ")); // geeft "Fire Air Water"
console.log(elements.join("-")); // geeft "Fire-Air-Water"

// push() - "pusht" een nieuw item, ofwel: voegt een item toe aan het einde van de array.
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(count); // geeft 4
console.log(animals); // geeft [ 'pigs', 'goats', 'sheep', 'cows']

animals.push("chickens", "cats", "dogs");
console.log(animals); // geeft [ 'pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs' ]

// reverse() - draait de volgorde van de array om.
const arrayNumbers = ["one", "two", "three", "four", "five"];
console.log("ARRAY:", arrayNumbers); // geeft ARRAY: [ 'one', 'two', 'three', 'four', 'five' ]

const reversed = arrayNumbers.reverse();
console.log("REVERSED:", reversed); // geeft REVERSED: [ 'five', 'four', 'three', 'two', 'one' ]

// reverse is destructief, het verandert de originele array.
console.log("ARRAY:", arrayNumbers); // geeft ARRAY: [ 'five', 'four', 'three', 'two', 'one' ]

// pop() - verwijderd het laatste item in de array en returned deze waarde.
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop()); // geeft tomato
console.log(plants); // geeft [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]

plants.pop();
console.log(plants); // geeft [ 'broccoli', 'cauliflower', 'cabbage' ]

// shift() - verwijderd het eerste item in de array en returned deze waarde.
const arrayDigits = [1, 2, 3];
const firstElement = arrayDigits.shift();
console.log(arrayDigits); // geeft [2, 3]
console.log(firstElement); // geeft 1

// slice() - maakt een referentieloze kopie van een deel van de array. De originele array wordt niet aangepast.
const moreAnimals = ["monkey", "wolf", "sheep", "camel", "tiger"];
console.log(moreAnimals.slice(2)); // geeft [ 'sheep', 'camel', 'tiger' ]
console.log(moreAnimals.slice(2, 4)); // geeft [ 'sheep', 'camel' ]
console.log(moreAnimals.slice(1, 5)); // geeft [ 'wolf', 'sheep', 'camel', 'tiger' ]

// splice() - voegt een item toe of vervangt een item op basis van indexnummer in de array.
const months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // voegt in op index 1
console.log(months); // geeft [ 'January', 'February', 'March', 'April', 'June' ]

months.splice(4, 1, "May"); // vervangt 1 element op index 4
console.log(months); // geeft [ 'January', 'February', 'March', 'April', 'May' ]

// DATE
// Wanneer je een nieuwe date instantie maakt zonder extra specificaties, zal deze automatisch ‘nu’ worden.
const today = new Date();
console.log(today);

// Als je een andere datum aan zou willen maken, zul je dit moeten specificeren. Dit kan op de volgende drie manieren.
const dateOfBirth1 = new Date("Dec 26, 1992 15:45:55");
const dateOfBirth2 = new Date(1992, 11, 26, 15, 45, 55);
const dateOfBirth3 = new Date(1992, 11, 26);
// Let op: tellen van de maand begint bij 0, dus januari is 0 en februari 1
console.log(dateOfBirth1); // geeft 1992-12-26T14:45:55.000Z
console.log(dateOfBirth2); // geeft 1992-12-26T14:45:55.000Z
console.log(dateOfBirth3); // geeft 1992-12-25T23:00:00.000Z

// DATE METHODS
// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
// getDay() - geeft de dag van de week (0 - 6).
// getHours() - geeft het uur (0 - 23).
// getMinutes() - geeft de minuten (0 - 59).
// getMonth() - geeft de maand (0 - 11).
// getSeconds() - geeft het aantal seconden (0 - 59).

// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
const moonLanding = new Date("July 20, 69 00:20:18 GMT+00:00");
// milliseconden sinds 1 jan 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime()); // geeft -14254782000

// getDay() - geeft de dag van de week (0 - 6).
const birthday = new Date("June 28, 1983 23:15:30");
const day1 = birthday.getDay(); // Zondag - Zaterdag : 0 - 6
console.log(day1); // geeft 2 (dinsdag)

const february = new Date("February 9, 2021 10:54:10");
const dayToday = february.getDay(); // Zondag - Zaterdag : 0 - 6
console.log(dayToday); // geeft 2 (dinsdag)

// getHours() - geeft het uur (0 - 23).
const hours = new Date("March 13, 08 04:20");
console.log(hours.getHours()); // geeft 4

// getMinutes() - geeft de minuten (0 - 59).
const minutes = new Date("March 13, 08 04:20");
console.log(minutes.getMinutes()); // geeft 20

// getMonth() - geeft de maand (0 - 11).
const month = new Date("July 20, 69 00:20:18");
console.log(month.getMonth()); // geeft 6 (juli)

// getSeconds() - geeft het aantal seconden (0 - 59).
const seconds = new Date("July 20, 69 00:20:18");
console.log(seconds.getSeconds()); // geeft 18

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