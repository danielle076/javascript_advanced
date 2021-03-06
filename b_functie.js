// JAVASCRIPT FUNCTIE
// Een functie is een blok code dat ontworpen is om een bepaalde taak uit te voeren.
// Een functie wordt uitgevoerd wanneer "iets" haar aanroept (calls it).
// Functie kun je herkennen door het woordje function, dat is een keyword van JavaScript.

// FUNCTION SYNTAX
// Keyword: function
// Naam van de functie: myFunction
// Parameter list: ()
// Block: {}

function myFunction(){

}

// Functienamen kunnen letters, cijfers, underscores (_) en dollartekens ($) bevatten (zelfde regels als variabelen).
// De haakjes kunnen parameternamen bevatten, gescheiden door komma's (parameter1, parameter2, ...).
// De code die door de functie moet worden uitgevoerd, staat tussen gekrulde haken {}.

// Functieparameters staan tussen haakjes () in de functiedefinitie.
// Functie-argumenten zijn de waarden die de functie ontvangt wanneer deze wordt aangeroepen.
// Binnen de functie gedragen de argumenten (de parameters) zich als lokale variabelen.

// WAT HEB JE AAN EEN FUNCTIE
// 1. Code hergebruiken --> makkelijk op één plek aan te passen.
// 2. Leesbaarheid.
// 3. Je splitst je programma in kleine onderdelen.

// FUNCTIE AANROEPEN
// De code in de functie zal worden uitgevoerd wanneer "iets" de functie aanroept:
// * Wanneer een gebeurtenis plaatsvindt (wanneer een gebruiker op een knop klikt).
// * Wanneer de functie wordt aangeroepen.
// * Automatisch (zelf opgeroepen).

// FUNCTIE RETURN
// Wanneer JavaScript een return statement bereikt, zal de functie stoppen met uitvoeren.
// Als de functie werd aangeroepen vanuit een verklaring, zal JavaScript "terugkeren" om de code na de aanroepende
// verklaring uit te voeren.
// Functies berekenen vaak een terugkeerwaarde. De terugkeerwaarde wordt "teruggegeven" aan de "aanroeper".

// VOORBEELD RETURN
// Bereken het product van twee getallen, en geef het resultaat terug.

const x = myFunction(4, 3); // functie wordt aangeroepen, return komt terecht in x

function myFunction(a, b) {
    return a * b; // de functie geeft het product van a en b
}

console.log(x); // resultaat 12

// MEERDERE WAARDEN RETOURNEREN
// Een functie kan altijd maar één terugkeerwaarde hebben.
// Als je twee waarden wilt teruggeven, dan gebruiken we een variabele waarin we meerdere waarden kunnen stoppen: een array.

function getAreaSizes(width, length, depth) {
    const area = width * length;
    const volume = width * length * depth;
    return [area, volume];
}

const kitchenSizes = getAreaSizes(4, 4, 2.5);
console.log(kitchenSizes); // resultaat [16, 40]

// VOORBEELD FUNCTIE HERBRUIKBAAR MAKEN
// Je maakt functie greet() 1 keer aan en kan hem oneindig vaak gebruiken.
// Je hoeft maar op één plek een aanpassing te doen.

function greet(){
    console.log("Hallo students!")
}
// Functie aanroepen
greet()
greet()
greet()

// Makkelijker is om deze 3x greet() in een loop te zetten
for (let i = 0; i < 3; i++) {
    greet()
}

// Stel je wilt geen hallo zeggen tegen studenten, maar tegen developers.
// Bovenstaand voorbeeld is herbruikbaar maar niet configureerbaar. Dit kun je doen door de code dynamisch te maken.

// Je maakt een variabele "subject" aan en in de log zet je de variabele.
function greet2(){
    const subject = "developers"
    console.log("Hallo " + subject)
}
// Functie aanroepen
greet2()

// Deze is nog niet dynamisch genoeg, want je moet elke keer de variabele "subject" handmatig aanpassen.
// Zet "subject" in de parameter list greet() en elke keer als we de functie aanroepen, dan verwacht hij van ons een subject.
// Het subject zet je tussen () van greet() als een argument.

// Parameter toegevoegd: subject
function greet3(subject){
    console.log("Hallo " + subject)
}

// Functie aanroepen met argumenten "collega's" en "afgestudeerden"
greet3("collega's");
greet3("afgestudeerden");

// We willen een e-mail sturen met een groet erin. Om ervoor te zorgen dat hij daadwerkelijk iets verstuurd i.p.v. dat hij
// hem alleen in de console zet, moet je de code returnen.
// Functie is nu herbruikbaarder: je kunt namelijk de waarde die in de functie wordt bepaald, gebruiken in de global scope
// omdat je hem returned. Je geeft hem terug aan de global scope.

// Met deze code kun je NIET bij de variabele "greeting".
function greet4(subject){
    const greeting = "Hallo" + subject;
}

const emailText = greeting + "wil je lid worden?"

// Met deze code kun je WEL bij de variabele "greeting".
// De waarde van "Hallo" + subject; kun je returnen.
// Roep de functie greet5() + subject aan.
// emailText2 gebruik je om je e-mail te sturen.
// Check of de e-mailtext2 klopt, doe je met console.log.
function greet5(subject){
    const greeting = "Hallo " + subject;
    return greeting;
}

const emailText2 = greet5("Danielle ") + "wil je lid worden?"

console.log(emailText2);