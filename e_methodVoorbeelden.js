// 1. Gegeven: we hebben een array met e-mailaddressen van medewerkers. Voer de volgende acties uit:
const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];


// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl
emailadresses.push('m.westerbroek@novi.nl');
console.log(emailadresses);


// 1b. Jouw collega wilt weten of het e-mailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit.
// (dus: bevat onze array n.stuivenberg@novi.nl?)
// OPTIE 1
const isNickThere = emailadresses.includes('n.stuivenberg@novi.nl');
console.log(isNickThere);

// OPTIE 2
// if (isNickThere === true) {
//     console.log("Nick is er!");
// }

// OPTIE 3
// if (emailadresses.includes('n.stuivenberg@novi.nl')) {
//     console.log("Nick is er!");
// }

// OPTIE 4
// console.log(emailadresses.includes('n.stuivenberg@novi.nl') && 'Nick bestaat!');


// 1c. Collega's staan in de e-maillijst op volgorde waarin ze bij Novi zijn komen werken. Nu blijkt echter dat een andere
// collega, Tess, bij Novi is komen werken VOOR Melissa. Haar e-mailadres moet dus worden toegevoegd op de één na laatste
// plek: t.mellink@novi.nl
// OPTIE 1
const insertPlace = emailadresses.length - 1;
emailadresses.splice(insertPlace, 0, 't.mellink@novi.nl');
console.log(emailadresses);

// OPTIE 2: als we  niet zouden weten waar melissa staat in de array
// emailadresses.splice(emailadresses.indexOf("m.westerbroek@novi.nl"), 0, "t.mellink@novi.nl");


// 1d. Er staat een foutje in de lijst. Het e-mail adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl,
// maar je weet niet op welke plek in de lijst dit e-mailadres staat. Schrijf een functie die drie parameters verwacht:
// een array met e-mailadressen, het oude e-mailadres dat vervangen moet worden, en het nieuwe e-mailadres.
// Deze functie achterhaalt het indexnummer van het oude e-mailadres en vervangt dit vervolgens voor het nieuwe adres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie
function replaceEmail(emailList, wrongEmail, replacementEmail) {
    const index = emailList.indexOf(wrongEmail);
    // ons geval staat hier eigenlijk, emailadresses[2] = m.vandergeest@novi.nl
    emailList[index] = replacementEmail;
}

replaceEmail(emailadresses, 'm.vandergeest@novi-education.nl', 'm.vandergeest@novi.nl');
console.log(emailadresses);


// 2. Schrijf een functie die de diameter van een cirkel verwacht als parameter en de omtrek van die cirkel berekent
// en teruggeeft
// tip: PI * diameter
// Uitkomst: 4 geeft 12.566370614359172
// Uitkomst: 12 geeft 37.69911184307752
function perimeter(diameter) {
    return Math.PI * diameter;
}

console.log(perimeter(4));


// 3. Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// Uitkomst: 4 geeft 13
// Uitkomst: 12 geeft 38
function perimeterRounded(diameter) {
    return Math.round(Math.PI * diameter);
}

perimeterRounded(4);


// 4. Schrijf een functie die het laatste karakter in een string teruggeeft
// Uitkomst: "vermicelli" geeft "i"
// Uitkomst: "kroepoek" geeft "k"
// OPTIE 1 (geeft het karakter op dit indexnummer terug)
function lastCharacter(word) {
    const index = word.length - 1;
    // const index = word.lastIndexOf(word);
    return word.charAt(index);
}

// OPTIE 2 (knipt de laatste letter van het woord eraf)
const lastChar = word => word.slice(-1);

console.log(lastCharacter("vermicelli"));
console.log(lastChar("vermicelli"));


// 5. Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er spaties aan het begin of
// einde van de zin staan, deze niet in de array zet.
// Uitkomst: " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij',
// 'zwart', 'ziet'];
// Uitkomst: "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];
function split(saying) {
    return saying.trim().split(" ");
}

console.log(split("Niet geschoten is altijd mis "));


// 6. Maak een variabele "today" en sla daar een nieuw date-object in op
// Print in de console (in nummers) in welke maand we nu zitten
// Print in de console (in nummers) welk uur van de dag het is
const today = new Date();

console.log(today.getMonth());
console.log(today.getHours());


// 7. Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// Als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// Uitkomst: "Nick", "Nova" geeft "Beide namen zijn even lang"
// Uitkomst: "Mitchel", "Nick" geeft "Mitchel"
function longestName(nameOne, nameTwo) {
    const firstName = nameOne.length;
    const secondName = nameTwo.length;

    if (firstName === secondName) {
        return "Beide namen zijn even lang";
    }
    // Mag ook als:
    // return nameOne.length === nameTwo.length && "Beide namen zijn even lang";

    if (firstName > secondName) {
        return nameOne;
    }

    return nameTwo;
}

console.log(longestName("Mitchel", "Nick"));
console.log(longestName("Nova", "Nick"));


// 8. Schrijf twee prompts waarbij je vraagt naar de namen van twee mensen. Er wordt verder niets met deze namen gedaan.
// Een willekeurig getal berekent een percentage (tussen de 1 en 100) en geeft deze via een alert als een love score aan
// de gebruiker.
prompt("what is your name?");
prompt("what is their name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");

// 9. Maak een array met voornamen.
// Schrijf een prompt die een gast vraagt naar zijn/haar naam. Wanneer ze deze intypen, controleer je hun naam met alle
// namen die in de gastenlijst staan. Als de naam bestaat geef je een alert "Welcome!" en als de naam niet bestaat
// "Sorry, maybe next time."
let guestList = ["Danielle", "Freckle", "Karin", "Kelly", "Chantal", "Claudia"];

let guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!")
} else {
    alert("Sorry, maybe next time.")
}