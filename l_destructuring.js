// DESTRUCTURING OBJECTS

// VOORBEELD #1: OBJECT PERSON
const person = {
    firstname: "Henk",
    lastname: "Pieters",
    city: "Amsterdam",
};

// Destructuring
// Dit is geen code block en ook geen nieuw object. Het is de destructuring syntax! De code hieronder zegt: "Geef een
// variabele genaamd first, een variabele genaamd last, en haal deze uit het person object."
const { firstname, lastname, city } = person;
console.log(firstname); // geeft Henk
console.log(lastname); // geeft Pieters
console.log(city); // geeft Amsterdam

// VOORBEELD #2: GENESTE OBJECTEN
// Destructuring werkt ook zodra de data meerdere niveaus diep verscholen zit in een object.
const studentInfo = {
    first: 'Henk',
    last: 'Pieters',
    contact: {
        email: {
            home: 'henkpieters@gmail.com',
            education: 'h.pieters@novi-education.nl',
        },
        website: {
            portfolio: 'https://studeren-bij-novi.nl'
        }
    }
};

// Wanneer we twee e-mailadressen eruit willen halen.
const { home, education } = studentInfo.contact.email;
console.log(home); // geeft henkpieters@gmail.com
console.log(education); // geeft h.pieters@novi-education.nl

// VOORBEELD #3: HERNOEMEN
// Soms krijgen we data binnen (bijvoorbeeld via API) die hele vreemde namen bevat. Of onder een naam die in ons script
// al in gebruik is, door een andere variabele. Of is het simpelweg logischer om de data een andere naam te geven.
const studentInformation = {
    first: 'Henk',
    last: 'Pieters',
    contact: {
        email: {
            atHome: 'henkpieters@gmail.com',
            teach: 'h.pieters@novi-education.nl',
        },
    }
};

const teach = "Hogeschool Novi";

const { atHome, teach: universityEmail } = studentInformation.contact.email;

console.log(teach); // geeft Hogeschool Novi
console.log(universityEmail) // geeft h.pieters@novi-education.nl

// VOORBEELD #4: HERNOEMEN
// Wanneer we twee objecten met exact dezelfde keys hebben en die willen hernoemen, krijgen we een error.
const dog = { name: "Pluisje", color: "black" };
const cat = { name: "Minoes", color: "red" };

const { name } = dog;
// const { name } = cat; // geeft een error! Variabele name is al in gebruik door de destructuring van dog

// Dit kun je oplossen door de variabelen tijdens het destructuren te hernoemen.
const dog2 = { name: "Pluisje", color: "black" };
const cat2 = { name: "Minoes", color: "red" };

const { name: dogName } = dog2;
const { name: catName } = cat2;

console.log(dogName) // geeft "Pluisje"
console.log(catName) // geeft "Minoes"

// DESTRUCTURING ARRAYS

// VOORBEELD #1: SOMEARRAY
const someArray = ["one", "two", "three"];

// Destructuring
const [first, second, third] = someArray;
console.log(first); // geeft one
console.log(second); // geeft two
console.log(third); // geeft three

// VOORBEELD #2: DESTRUCTURING VAN ARRAYS IS AFHANKELIJK VAN DE VOLGORDE
// Waardes hebben in arrays geen namen, zoals de keys in objecten. We weten alleen welk item we aanspreken op basis van
// de volgorde. Wanneer je items in een array destructured, mag je ze elke gewenste naam geven die je wil. Principes als
// "hernoemen" zijn hier niet aan de orde.

const anotherArray = ["four", "five", "six"];

const [fifth, sixth, fourth] = anotherArray;

console.log(fifth); // geeft four
console.log(sixth); // geeft five
console.log(fourth); // geeft six

// VOORBEELD #3: FUNCTIES
// Destructuring van arrays is handig wanneer functies een array teruggeven. Dit gebeurt soms, omdat een return value
// altijd maar één waarde kan zijn. Als er meerdere waardes teruggegeven moeten worden, doen we dit door een array of
// object te gebruiken.
function getNames() {
    return ["Henk", "Piet", "Jan"];
}

const names = getNames();
console.log(names); // geeft ['Henk', 'Piet', 'Jan']

// Vaak willen we deze waardes direct individueel aanspreken.

function getNames2() {
    return ["Henk", "Piet", "Jan"];
}

const [nameOne, nameTwo, nameThree] = getNames2();
console.log(nameOne); // geeft Henk
console.log(nameTwo); // geeft Piet
console.log(nameThree); // geeft Jan

// Wil je alleen de eerste en de laatste naam, dan geef je dit aan met een extra komma, omdat de volgorde belangrijk is bij arrays.

const [firstName,, secondName] = getNames2();

console.log(firstName); // geeft Henk
console.log(secondName); // geeft Jan

// Wanneer je niet weet hoe lang de array is en je wilt alleen het laatste gedeelte, gebruik je ... (spread operator).

function getNames3() {
    return ["Henk", "Piet", "Jan", "Klaas"];
}

const [begin, ...rest] = getNames3();

console.log(begin); // geeft Henk
console.log(rest); // geeft [ 'Piet', 'Jan', 'Klaas' ]