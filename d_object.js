// OBJECTEN
// In het echte leven, is een auto een object.
// Een auto heeft eigenschappen zoals gewicht en kleur, en methoden zoals starten en stoppen.

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

// Alle auto's hebben dezelfde eigenschappen, maar de waarden van de eigenschappen verschillen van auto tot auto.
// Alle auto's hebben dezelfde methoden, maar de methoden worden op verschillende momenten uitgevoerd.

// #1 HOE KUN JE EEN OBJECT HERKENNEN?
const user = {} // dit is een object
{} // dit is een block

// Object is een waarde met accolades, dit zie je doordat je hem opslaat in de variabelen.
// Block is een statement met accolades (bijv. if-statement).

// #2 HOE KUN JE EEN OBJECT HERKENNEN?
// Object is een verzameling met data dat staat tussen {} met key value pairs.
const user2 = {
    firstName: "Daniëlle",
    lastName: "van den Akker"
};

// OBJECT VS ARRAY
// Een object is een verzameling, een array ook.
// Array van bovenstaande object ziet er zo uit:
const user3 = ["Daniëlle", "van den Akker"];

// WANNEER ZOU JE EEN OBJECT GEBRUIKEN I.P.V. EEN ARRAY EN VICE VERSA?
// * In een array staan dezelfde soorten data
// * In een object staan verschillende soorten data
// * In een array zie je niet wat de data is
// * In een object zie je wel wat de data is, hij is georganiseerd met keys
// * Een array gebruik je wanneer de volgorde belangrijk is
// * Bij een object kan het zijn dat JavaScript de keys/data omdraait (je kan er niet op rekenen dat de volgorde altijd
//   hetzelfde is) (zou ook niet uit hoeven te maken)

// SAMENVATTING OBJECT HERKENNEN
// * Waarden met accolades
// * Key value pairs
// * Een verzameling
// * Verschillende soorten data -> aan de key kan je zien wat het is

// USECASE OBJECT
// Wanneer je data wilt groeperen gebruik je een object.
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
// Het aanroepen van een waarde doe je door de variable.key tussen () te zetten in de log.
console.log(car.manufacturer); // Tesla
console.log(car.owner.name); // Daniëlle

// WAARDEN UIT EEN OBJECT AANSPREKEN #2
// Key object "date produced" heeft een spatie, deze moet anders worden aangesproken.
// In plaats van de punt . gebruik je haakjes [] en maak je er een stuk tekst van met "" in de log.
const car2 = {
    color: "red",
    manufacturer: "Tesla",
    model: "S",
    "date produced": 2019 // hier zit een spatie in het keyword
};

console.log(car2["date produced"]);