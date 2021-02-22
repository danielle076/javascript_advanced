// ARRAY METHODES
// Om data op een handige manier te groeperen kom je vaak objecten in arrays tegenkomen, die op hun beurt waarschijnlijk
// ook weer objecten of arrays bevatten. Het geeft ons de mogelijkheid om onze informatie op een logische manier op te slaan.
// Om deze data te kunnen beheren, manipuleren en versturen heb je verschillende technieken.
// * map()
// * filter()
// * find()
// * sort()

// Bij deze vier methodes moet je altijd een callback functie meegeven. Een callback is een functie die wordt aangeroepen
// door een andere functie, waarbij deze als parameter meegegeven wordt. In de callback beschrijven we, net als bij
// een for-loop, wat voor acties we willen uitvoeren tijdens elke loop.

// BESCHRIJVING MAP()
// map() geeft een nieuwe array terug waarin de waardes van de oude array, plus de gemaakte aanvullingen staan. De
// originele array wordt niet aangepast. Je kunt map() ook gebruiken om een specifieke actie uit te voeren voor iedere
// entry in de array.

// MAP() VOORBEELD #1
const arr = [2, 5, 6, 3, 8, 9];

const newArr = arr.map(function(val, index){
    return {key:index, value:val*val};
})

console.log(newArr); // geeft [ { key: 0, value: 4 }, { key: 1, value: 25 }, { key: 2, value: 36 }, { key: 3, value: 9 }, { key: 4, value: 64 }, { key: 5, value: 81 } ]

// MAP() VOORBEELD #2
const students = ["Danielle van den Akker", "Freckle Oreo", "Chantal van Toorn"];

const prefixedStudents = students.map(function(student) {
    return "Leerling: " + student;
});

console.log(prefixedStudents); // geeft ['Leerling: Danielle van den Akker', 'Leerling: Freckle Oreo', 'Leerling: Chantal van Toorn' ]

// BESCHRIJVING FILTER()
// filter() geeft een nieuwe array terug met alle waardes die voldoen aan de conditie die is gesteld. De originele
// array wordt niet aangepast.

// FILTER() VOORBEELD #1
function isPositive(value) {
    return value > 0;
}

const filtered = [20, 88, -155, 0, 244].filter(isPositive);

console.log(filtered); // geeft [ 20, 88, 244 ]

// FILTER VOORBEELD #2
function isEven(value) {
    return value % 2 == 0;
}

const filtered2 = [11, 98, 31, 23, 944].filter(isEven);

console.log(filtered2); // heeft [ 98, 944 ]

// BESCHRIJVING FIND()
// find() geeft een enkele waarde terug, namelijk het eerste element dat voldoet aan de conditie die is gesteld.

// FIND() VOORBEELD #1
const array = [10, 20, 30, 40, 50];

const found = array.find(function (element) {
    return element > 20;
});

console.log(found); // geeft 30

// FIND() VOORBEELD #2
const array2 = [2, 7, 8, 9];

const search = array2.find(function (element) {
    return element > 4;
});

console.log(search); // geeft 7

// BESCHRIJVING SORT()
// sort() geeft niets terug, maar veranderd de volgorde van de bestaande array op basis van de conditie die is gesteld.

// SORT() VOORBEELD #1
const arr3 = [2, 5, 8, 1, 4]

arr3.sort();

console.log(arr3); // geeft [ 1, 2, 4, 5, 8 ]

// SORT() VOORBEELD #2
const arr2 = [2, 5, 8, 1, 4]

arr2.sort(function(a, b) {
    return a + 2 * b;
});

console.log(arr2); // geeft [ 2, 5, 8, 1, 4 ]