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