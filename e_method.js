// JAVASCRIPT METHODE
// Een methode is een functie die een onderdeel is van een object.

// VOORBEELD OBJECT & METHODE
// console is een object.
// log is een functie die in het object zit: dat noem je een "method".
console.log();

// ARRAY METHODS
// concat() - voegt twee arrays samen.
// includes() - checkt of één van de items in de array een bepaalde waarde bevat, zoals “Lasagne bladen” of het getal 45.
// indexOf() - checkt het indexnummer van het item in de array met een bepaalde waarde, zoals “Lasagne bladen”.
// join() - maakt een string van alle items in de array door ze achter elkaar te plakken.
// push() - “pusht” een nieuw item, ofwel: voegt een item toe aan het einde van de array.
// reverse() - draait de volgorde van de array om.
// pop() - verwijderd het laatste item in de array en returned deze waarde.
// shift() - verwijderd het eerste item in de array en returned deze waarde.
// slice() - maakt een referentieloze kopie van een deel van de array. De originele array wordt niet aangepast..
// splice() - voegt een item toe of vervangt een item op basis van indexnummer in de array.

// concat () - voegt twee arrays samen.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myGirls.concat(myBoys)) // geeft [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// includes() - checkt of één van de items in de array een bepaalde waarde bevat, zoals “Lasagne bladen” of het getal 45.
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // geeft true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // geeft true
console.log(pets.includes('at')); // geeft false

// indexOf() - checkt het indexnummer van het item in de array met een bepaalde waarde.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // geeft 1
console.log(beasts.indexOf('bison', 2)); // geeft 4, want hij begint te tellen bij 2
console.log(beasts.indexOf('giraffe')); // geeft -1, want is niet gevonden

// join() - maakt een string van alle items in de array door ze achter elkaar te plakken.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // geeft "Fire,Air,Water"
console.log(elements.join('')); // geeft "FireAirWater"
console.log(elements.join('-')); // geeft "Fire-Air-Water"

// push() - “pusht” een nieuw item, ofwel: voegt een item toe aan het einde van de array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count); // geeft 4
console.log(animals); // geeft ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals); // geeft ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// reverse() - draait de volgorde van de array om.
const array2 = ['one', 'two', 'three'];
console.log('array2:', array2); // geeft "array2:" Array ["one", "two", "three"]

const reversed = array2.reverse();
console.log('reversed:', reversed); // geeft "reversed:" Array ["three", "two", "one"]

// reverse is destructief, het verandert de originele array.
console.log('array2:', array2); // geeft "array2:" Array ["three", "two", "one"]

// pop() - verwijderd het laatste item in de array en returned deze waarde.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // geeft "tomato"
console.log(plants); // geeft ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants); // geeft ["broccoli", "cauliflower", "cabbage"]

// shift() - verwijderd het eerste item in de array en returned deze waarde.
const array3 = [1, 2, 3];
const firstElement = array3.shift();
console.log(array3); // geeft [2, 3]
console.log(firstElement); // geeft 1

// slice() - maakt een referentieloze kopie van een deel van de array. De originele array wordt niet aangepast.
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals2.slice(2)); // geeft ["camel", "duck", "elephant"]
console.log(animals2.slice(2, 4)); // geeft ["camel", "duck"]
console.log(animals2.slice(1, 5)); // geeft ["bison", "camel", "duck", "elephant"]

// splice() - voegt een item toe of vervangt een item op basis van indexnummer in de array.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // voegt in op index 1
console.log(months); // geeft ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // vervangt 1 element op index 4
console.log(months); // geeft ["Jan", "Feb", "March", "April", "May"]

// DATE
// Wanneer je een nieuwe date instantie maakt zonder extra specificaties, zal deze automatisch ‘nu’ worden.
const today = new Date();
console.log(today);

// Als je een andere datum aan zou willen maken, zul je dit moeten specificeren. Dit kan op de volgende drie manieren.
const dateOfBirth1 = new Date('Dec 26, 1992 15:45:55');
const dateOfBirth2 = new Date(1992, 11, 26, 15, 45, 55);
const dateOfBirth3 = new Date(1992, 11, 26);
// Let op: tellen van de maand begint bij 0, dus januari is 0 en februari 1

// DATE METHODS
// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
// getDay() - geeft de dag van de week (0 - 6).
// getHours() - geeft het uur (0 - 23).
// getMinutes() - geeft de minuten (0 - 59).
// getMonth() - geeft de maand (0 - 11).
// getSeconds() - geeft het aantal seconden (0 - 59).

// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');
// milliseconden sinds 1 jan 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime()); // geeft -14254782000

// getDay() - geeft de dag van de week (0 - 6).
const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay(); // Zondag - Zaterdag : 0 - 6
console.log(day1); // geeft 2

const january = new Date('Januari 22, 2021 10:54:10');
const day2 = january.getDay(); // Zondag - Zaterdag : 0 - 6
console.log(day2); // geeft 5

// getHours() - geeft het uur (0 - 23).
const birthday2 = new Date('March 13, 08 04:20');
console.log(birthday2.getHours()); // geeft 4

// getMinutes() - geeft de minuten (0 - 59).
const birthday3 = new Date('March 13, 08 04:20');
console.log(birthday3.getMinutes()); // geeft 20

// getMonth() - geeft de maand (0 - 11).
const moonLanding2 = new Date('July 20, 69 00:20:18');
console.log(moonLanding2.getMonth()); // geeft 6

// getSeconds() - geeft het aantal seconden (0 - 59).
const moonLanding3 = new Date('July 20, 69 00:20:18');
console.log(moonLanding3.getSeconds()); // geeft 18

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
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase()); // geeft "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// toLowerCase() - veranderd alle letters in kleine letters.
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.toLowerCase());// geeft "the quick brown fox jumps over the lazy dog."

// charAt() - returned het karakter dat op het opgevraagde indexnummer staat.
const sentence3 = 'The quick brown fox jumps over the lazy dog.';
const index = 4;

console.log(`The character at index ${index} is ${sentence3.charAt(index)}`); // geeft "The character at index 4 is q"

// indexOf() - returned het indexnummer van de plek waarop het opgevraagde karakter het eerst voorkomt.
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// geeft "The index of the first "dog" from the beginning is 40"
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// geeft "The index of the 2nd "dog" is 52"

// lastIndexOf() - returned het indexnummer van de plek waarop het opgevraagde karakter het laatst voorkomt.
const paragraph2 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm2 = 'dog';

console.log(`The index of the first "${searchTerm2}" from the end is ${paragraph2.lastIndexOf(searchTerm2)}`);
// geeft "The index of the first "dog" from the end is 52"

// substring() - returned alle karakters tussen de meegegeven indexnummers.
const str = 'Mozilla';

console.log(str.substring(1, 3)); // geeft "oz"
console.log(str.substring(2)); // geeft "zilla"

// split() - hakt de string in stukjes op basis van een conditie en returned de stukjes in een array.
const str2 = 'The quick brown fox jumps over the lazy dog.';

const words = str2.split(' ');
console.log(words[3]); // geeft "fox"

const chars = str2.split('');
console.log(chars[8]); // geeft "k"

const strCopy = str2.split();
console.log(strCopy); // geeft ["The quick brown fox jumps over the lazy dog."]

// trim() - verwijderd spaties aan het begin en einde van een string.
const greeting = '   Hello world!   ';

console.log(greeting); // geeft "   Hello world!   ";
console.log(greeting.trim()); // geeft "Hello world!";

// replace() - verwijderd het laatste item in de array en returned deze waarde.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// geeft "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /dog/i;
console.log(p.replace(regex, 'ferret'));
// geeft "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// includes() checkt of de string een specifiek karakter(s) bevat.
const sentence4 = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';

console.log(`The word "${word}" ${sentence4.includes(word) ? 'is' : 'is not'} in the sentence`);
// geeft "The word "fox" is in the sentence"