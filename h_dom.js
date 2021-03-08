// JAVASCRIPT IN DE FRONTEND: HET HTML DOM
// WAT IS DOM
// DOM staat voor Document Object Model.
// Wanneer een webpagina wordt geladen, maakt de browser een Document Object Model van de pagina.
// Het definieert de logische structuur van documenten en de manier waarop een document wordt geraadpleegd en gemanipuleerd.
// Het HTML DOM-model is opgebouwd als een boom van Objecten: https://www.w3schools.com/js/pic_htmltree.gif

// WAT KAN JE ERMEE
// Met het objectmodel kan JavaScript HTML dynamisch maken.
// * JavaScript kan alle HTML-elementen in de pagina veranderen.
// * JavaScript kan alle HTML-attributen op de pagina wijzigen.
// * JavaScript kan alle CSS-stijlen op de pagina wijzigen.
// * JavaScript kan bestaande HTML-elementen en -attributen verwijderen.
// * JavaScript kan nieuwe HTML-elementen en -attributen toevoegen.
// * JavaScript kan reageren op alle bestaande HTML-gebeurtenissen in de pagina.
// * JavaScript kan nieuwe HTML-gebeurtenissen in de pagina maken.

// DE BELANGRIJKSTE METHODES VAN DE DOM
// - document.getElementById: selecteer 1 enkel element op basis van id
// - textContent: kan je veranderen met JavaScript
// - document.getElementsByClassName: selecteer meerdere elementen op basis van class
// - document.addEventListener:
//   - Laat de browser luisteren naar een event (vaak gebruikers interactie)
//   - Je kan een functie meegeven die wordt uitgevoerd zodra de gebruiker iets doet
// - document.createElement: maakt element (niet te zien)
// - document.appendChild: plakt element op de pagina (nu wel te zien)
// - document.setAttribute: een attribuut toevoegen (class, id, type)
// - document.removeAttribute
// * Bonus
// - element.remove(): haalt een element weg
// - kleurtjes toevoegen / veranderen
//   - class toevoegen: in css class definiëren
//   - direct met JS: element.style.backgroundColor = "orange"

// INCORPORATE JAVASCRIPT
// Voordat we JavaScript kunnen gebruiken op onze website moeten we het JavaScript file linken met de HTML file.
// We maken gebruik van een externe file en we specificeren de locatie van dat bestand in het attribuut src.
// <script src="h_dom.js"></script>
// De positie in het HTML document waar we de script tag plaatsen is heel belangrijk.
// De beste methode is om het script aan het eind te plaatsen, net voor de afsluitende body tag. Reden hiervoor is dat
// JavaScript code invloed heeft op je HTML en als de JavaScript bovenaan de top staat, dan ziet hij de HTML code nog
// niet want die staat pas in de body, waardoor je een fout krijgt omdat JavaScript de code niet heeft kunnen lezen.
// (bij css is dit andersom)
// Bijkomend voordeel hiervan is als je veel Javascript code hebt, wat meestal meer tijd kost om uit te voeren, dan zal
// tenminste alle inhoud van je website geladen zijn voor de gebruikers om te zien, en de delen die ze niet kunnen
// waarnemen, zoals de script code, gebeurt daarna zodat het lijkt alsof de website sneller laadt.

// h_dom.html: "<h1 id="bigHeader">Freckle's inbox</h1>".
// Met JavaScript kun je id "bigHeader" met getElementById aanroepen.
const header = document.getElementById("bigHeader");

// Deze twee logjes staan in de browser bij inspecteren.
console.log("HAIIII???"); // geeft HAIIII???
console.log("HEADER:", header); // geeft HEADER: <h1 id="bigHeader">Freckle's inbox</h1>

const user = "Danielle";
// Met textcontent kun je de <h1> van h_dom.html aanpassen en dynamisch maken.
header.textContent = `${user}'s Inbox 🔮 🦠`; // geeft HEADER: <h1 id="bigHeader">Danielle's Inbox 🔮 🦠</h1>

// Objecten: document.getElementById en header.textContent

// h_dom.html: "<li class="email">EMAIL 1</li>"
// Bij getElementsByClassName() zet je tussen haakjes de class uit h_dom.html: "email".
// getElementsByClassName() geeft een HTMLCollection terug.
// HTMLCollection lijkt op een array, maar je kan bijvoorbeeld geen .map() van maken, dus weet je dat het geen array is.
const emails = document.getElementsByClassName("email")
console.log(emails); // HTMLCollection(5) [li.email, li.email, li.email, li.email, li.email]

// Op de volgende manier kun je een array maken van een HTMLCollection.
const emailArray = Array.from(emails);

for (const email of emails) {
    // Je logt de textContent van alle e-mails
    console.log(email.textContent);
    // We kunnen iets veranderen aan de e-mails
    email.textContent = email.textContent + " not Opened Yet";
    // Hiermee kunnen we gebruikers interactie maken dat de gebruiker erop kan gaan klikken
}

// DELETE BUTTON STAPPENPLAN
// - [x] Selecteer knopje in HTML en JS "deleteButton"
// - [x] Voeg een event listener toe, die luistert naar click
// - [x] Wanneer er geclickt wordt:
// - [x] 1. Selecteer alle emails
// - [x] 2. Verwijder alle emails

// h_dom.html: "<button id="deleteButton">DELETE EMAILS</button>"
const deleteButton = document.getElementById("deleteButton");
console.log("DELETE BUTTON:", deleteButton); // geeft DELETE BUTTON: <button id="deleteButton">DELETE EMAILS</button>

deleteButton.addEventListener("click", function() {
    console.log("I GOT CLICKED!"); // geeft I GOT CLICKED
    const emails = document.getElementsByClassName("email");
    const emailArray = Array.from(emails);

    emailArray.forEach(function(email) { // De forEach() methode voert een gegeven functie eenmaal uit voor elk array-element.
        email.remove();
    });
});

// CREATE NEW EMAIL STAPPENPLAN
// - [x] Input veld waar iemand iets in kan typen (h_dom.html)
// - [x] Knopje met create email (h_dom.html)
// - [x] Wanneer iemand op het knopje klikt: (getElementById, addEventListener)
//   - [x] Input veld selecteren (getElementById)
//   - [x] Text uit het inputveld halen (.value)
//   - [x] Nieuw element maken (createElement)
//   - [x] De text van de gebruiker aan het element toevoegen (.textContent)
//   - [x] Het lijstje selecteren (getElementById)
//   - [x] Het element aan het lijstje "plakken" (appendChild)

const createButton = document.getElementById("createButton");
console.log("CREATE BUTTON:", createButton); // geeft CREATE BUTTON: <button id="createButton">Create email</button>

createButton.addEventListener("click", function() {
    console.log("CLICKED?"); // klik op "create email" geeft CLICKED?
    const emailInput = document.getElementById("emailInput");
    console.log(emailInput.value, "VALUE OF INPUT?"); // klik op "create email" geeft VALUE OF INPUT?

    const newEmail = document.createElement("li");
    newEmail.setAttribute("class", "email new");
    newEmail.textContent = emailInput.value;
    newEmail.style.backgroundColor = "mediumpurple"; // vul iets in, klik op "create email" maakt de nieuwe waarde paars

    const inbox = document.getElementById("inbox");
    console.log("Inbox:", inbox); // geeft Inbox: <ul id="inbox">…</ul>
    inbox.appendChild(newEmail);
});