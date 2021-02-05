// ARRAY METHODES
// * map()
// * filter()
// * filter()
// * sort()

// Bij deze vier methodes moet je altijd een callback functie meegeven. Een callback is een functie die wordt aangeroepen
// door een andere functie, waarbij deze als parameter meegegeven wordt. In de callback beschrijven we, net als bij
// een for-loop, wat voor acties we willen uitvoeren tijdens elke loop.

// MAP() SYNTAX
// array.map(function(currentValue, index, arr), thisValue)
// Parameters: deze methode accepteert twee parameters (function en thisValue)
// * function(currentValue, index, arr): Dit is een verplichte parameter en deze wordt op elk element van de array
// uitgevoerd. Het bevat drie parameters:
//   1. currentValue: een verplichte parameter en het bevat de waarde van het huidige element.
//   2. index: een optionele parameter en het bevat de index van het huidige element.
//   3. arr: een optionele parameter en bevat de array.
// * thisValue: Dit is een optionele parameter en bevat de waarde van het element dat aan de functie wordt doorgegeven.
// Return value: het geeft een nieuwe array terug en elementen van arrays zijn het resultaat van de callback functie.

// BESCHRIJVING MAP()
// map() geeft een nieuwe array terug waarin de waardes van de oude array, plus de gemaakte aanvullingen staan. De
// originele array wordt niet aangepast. Je kunt map() ook gebruiken om een specifieke actie uit te voeren voor iedere
// entry in de array.

// MAP() VOORBEELD #1
var arr = [2, 5, 6, 3, 8, 9];

var newArr = arr.map(function(val, index){
    return {key:index, value:val*val};
})

console.log(newArr); // geeft [ { key: 0, value: 4 }, { key: 1, value: 25 }, { key: 2, value: 36 }, { key: 3, value: 9 }, { key: 4, value: 64 }, { key: 5, value: 81 } ]

// MAP() VOORBEELD #2
const students = ["Danielle van den Akker", "Freckle Oreo", "Chantal van Toorn"];

const prefixedStudents = students.map((student) => {
    return "Leerling: " + student;
});

console.log(prefixedStudents); // geeft ['Danielle van den Akker', 'Freckle Oreo', 'Chantal van Toorn']

// FILTER() SYNTAX
// array.filter(callback(element, index, arr), thisValue)
// Parameters: deze methode accepteert vijf parameters (callback, element, index, arr en thisValue)
//   1. callback: parameter bevat de functie die moet worden aangeroepen voor elk element van de array.
//   2. element: parameter bevat de waarde van de elementen die momenteel verwerkt worden.
//   3. index: parameter is optioneel, het bevat de index van het currentValue element in de array beginnend bij 0.
//   4. arr: parameter is optioneel, het bevat de volledige array waarop Array.every wordt aangeroepen.
//   5. thisValue: parameter is optioneel, het bevat de context die moet worden doorgegeven als deze moet worden gebruikt
//   tijdens het uitvoeren van de callback functie. Als de context wordt doorgegeven, zal deze bij elke aanroep van de
//   callback-functie zo worden gebruikt, anders wordt ongedefinieerd als standaard gebruikt.
// Return value: Deze methode retourneert een nieuwe array bestaande uit alleen die elementen die voldeden aan de voorwaarde van de arg_functie.

// BESCHRIJVING FILTER()
// filter() geeft een nieuwe array terug met alle waardes die voldoen aan de conditie die is gesteld. De originele
// array wordt niet aangepast.

// FILTER() VOORBEELD #1
function isPositive(value) {
    return value > 0;
}

var filtered = [20, 88, -155, 0, 244].filter(isPositive);

console.log(filtered); // geeft [ 20, 88, 244 ]

// FILTER VOORBEELD #2
function isEven(value) {
    return value % 2 == 0;
}

var filtered2 = [11, 98, 31, 23, 944].filter(isEven);

console.log(filtered2); // heeft [ 98, 944 ]

// FIND() SYNTAX
// array.find(function(currentValue, index, arr),thisValue)
// Parameters: deze methode accepteert vijf parameters (functie, currentValue, index, arr and thisValue)
//   1. functie: de functie van de array die op elk element werkt.
//   2. currentValue: parameter bevat het huidige element.
//   3. index: optionele parameter die de index van het huidige element bevat.
//   4. arr: optionele parameter die het array object bevat waartoe het huidige element behoort.
//   5. thisValue: parameter is optioneel, indien een waarde wordt doorgegeven aan de functie om gebruikt te worden als
//   zijn "this" waarde anders zal de waarde "undefined" doorgegeven worden als zijn "this" waarde.
// Return value: deze geeft de waarde van het array-element terug, als een van de elementen in de array die aan de
// voorwaarde voldoen, anders geeft hij ongedefinieerd terug.

// BESCHRIJVING FIND()
// find() geeft een enkele waarde terug, namelijk het eerste element dat voldoet aan de conditie die is gesteld.

// FIND() VOORBEELD #1
var array = [10, 20, 30, 40, 50];

var found = array.find(function (element) {
    return element > 20;
});

console.log(found); // geeft 30

// FIND() VOORBEELD #2
var array2 = [2, 7, 8, 9];

var found2 = array2.find(function (element) {
    return element > 4;
});

console.log(found2); // geeft 7

// SORT() SYNTAX
// arr.sort(compareFunction)
// Parameters: deze methode accepteert één parameter
// compareFunction: Deze parameter wordt gebruikt om de elementen te sorteren volgens de verschillende attributen en in de verschillende volgorde.
//   - compareFunction(a,b) < 0
//   Dan komt a voor b in het antwoord.
//   - compareFunction(a,b) > 0
//   Dan komt b voor a in het antwoord.
//   - compareFunction(a,b) = 0
//   Dan blijft de volgorde van a en b ongewijzigd.
// Return value: Deze methode retourneert de referentie van de gesorteerde oorspronkelijke array.

// BESCHRIJVING SORT()
// sort() geeft niets terug, maar veranderd de volgorde van de bestaande array op basis van de conditie die is gesteld.

// SORT() VOORBEELD #1
var arr = [2, 5, 8, 1, 4]

arr.sort();

console.log(arr); // geeft [ 1, 2, 4, 5, 8 ]

// SORT() VOORBEELD #2
var arr2 = [2, 5, 8, 1, 4]

arr2.sort(function(a, b) {
    return a + 2 * b;
});

console.log(arr2); // geeft [ 2, 5, 8, 1, 4 ]