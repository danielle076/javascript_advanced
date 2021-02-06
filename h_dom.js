// JAVASCRIPT IN DE FRONTEND

// WAT IS DOM
//  - Familieboom van de webpagina

// WAT KAN JE ERMEE
//  - Interactieve pagina maken (gebruikers klikken op dingen)
//  - Dynamische pagina's maken (andere content weergeven afhankelijk van de gebruiker)

// WELKE METHODES HEEFT DE DOM (de belangrijskte)
//  - document.getElementById -> selecteer 1 enkel element op basis van id
//  - document.getElementsByClassName -> selecteer meerdere elementen op basis van class
//  - document.addEventListener ->
//      - Laat de browser luisteren naar een event (vaak gebruikers interactie)
//      - Je kan een functie meegeven die wordt uitgevoerd zodra de gebruiker iets doet
//  - document.createElement -> maak element (niet te zien)
//  - document.appendChild -> plak element op de pagina (nu wel te zien)
//  - document.setAttribute -> een attribuut toevoegen (class, id, type)
//  - document.removeAttribute
// * Properties van elementen
//  - textContent -> kan je veranderen met javascript
// * Bonus
//  - element.remove() -> haal een element weg
//  - kleurtjes toevoegen / veranderen
//    - class toevoegen -> in css class definieren
//    - direct met JS -> element.style.backgroundColor = "orange"

// in HTML heb je <h1> id "bigHeader" gegeven en deze kun je aanroepen met JavaScript
const header = document.getElementById("bigHeader");

// deze twee logjes staan in de browser bij inspecteren
console.log("HAIIII???");
console.log("header", header);

const user = "Danielle";
// textcontent hiermee kun je de h1 van HTML aanpassen en dynamisch maken
header.textContent = `${user}'s Inbox 🔮 🦠`;

// document.getElementById en header.textContent zijn objecten

// bij getElementsByClassName zet je tussen haakjes de class "email" (staat in h_dom.html)
// getElementsByClassName geeft een HTMLCollection terug
const emails = document.getElementsByClassName("email")
console.log(emails); // HTMLCollection(5) [li.email, li.email, li.email, li.email, li.email]
// HTMLCollection lijkt op een array. Je kan bijvoorbeeld geen .map() van maken, dus weet je dat het geen array is

// array maken van een HTMLCollection
const emailArray = Array.from(emails);

for (const email of emails) {
// je logt de textContent van alle e-mails
  console.log(email.textContent);
  // we kunnen iets veranderen aan de e-mails
  email.textContent = email.textContent + " not Opened Yet";
  // hierop gaan we gebruikers interactie maken dat de gebruiker erop kunnen gaan klikken
}