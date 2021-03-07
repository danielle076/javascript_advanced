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

// concat() - voegt twee arrays samen.
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