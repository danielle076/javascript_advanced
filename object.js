// OBJECTEN, EIGENSCHAPPEN EN METHODEN IN HET ECHTE LEVEN
// In het echte leven, is een auto een object
// Een auto heeft eigenschappen zoals gewicht en kleur, en methoden zoals starten en stoppen

// VOORBEELD OBJECT
// auto

// VOORBEELD EIGENSCHAPPEN (PROPERTIES)
// auto.naam = Fiat
// auto.model = 500
// auto.gewicht = 850kg
// auto.kleur = wit

// METHODEN
// auto.start()
// auto.rijden()
// auto.remmen()
// auto.stop()

// Alle auto's hebben dezelfde eigenschappen, maar de waarden van de eigenschappen verschillen van auto tot auto
// Alle auto's hebben dezelfde methoden, maar de methoden worden op verschillende momenten uitgevoerd

// #1 HOE KUN JE EEN OBJECT HERKENNEN?
const user = {} // dit is een object
{} // dit is een block

// object is een waarde met accolades, dit zie je doordat je hem opslaat in de variabelen
// block is een statement met accolades (bijv. if-statement)

// #2 HOE KUN JE EEN OBJECT HERKENNEN?
// object is een verzameling met data dat staat tussen {}, key value pairs
const user = {
    firstName: "Daniëlle",
    lastName: "van den Akker"
};

// OBJECT VS ARRAY
// een object is een verzameling, een array ook
// array van bovenstaande object ziet er zo uit:
const user = ["Daniëlle", "van den Akker"];

// WANNEER ZOU JE EEN OBJECT GEBRUIKEN IPV VAN EEN ARRAY EN VICE VERSA?
// * in een array staan dezelfde soorten data
// * in een object staan verschillende soorten data
// * in een array zie je niet wat de data is
// * in een object zie je wel wat de data is, hij is georganiseerd met keys
// * een array gebruik je wanneer de volgorde belangrijk is
// * bij een object kan het zijn dat JavaScript de keys/data omdraait (je kan er niet op rekenen daT de volgorde altijd
// hetzelfde is) (zou ook niet uit hoeven te maken)

// OPSOMMING OBJECT HERKENNEN
// * waarde met accolades
// * key value pairs
// * een verzameling
// * verschillende soorten data -> aan de key kan je zien wat het is

// USECASE OBJECT
// wanneer je data wilt groeperen, gebruik je een object
const car = {
    color: "red",
    manufacturer: "Tesla",
    model: "S",
    yearOfManufacture: 2019,
    owner: {
        name: "Daniëlle" // object binnen een object
    }
};

// WAARDEN UIT EEN OBJECT AANSPREKEN #1
// het aanroepen van een waarde doe je door de variable.key tussen () te zetten in de log
console.log(car.manufacturer); // Tesla
console.log(car.owner.name); // Daniëlle

// WAARDEN UIT EEN OBJECT AANSPREKEN #
// key object "data produced" heeft een spatie, hoe kun je deze aanspreken
// ipv van de punt . gebruik je haakjes [] en maak je er een stuk tekst van met "" in de log
const car = {
    color: "red",
    manufacturer: "Tesla",
    model: "S",
    "date produced": 2019 // hier zit een spatie in het keyword
};

console.log(car["date produced"]);