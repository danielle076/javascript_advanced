// ARROW FUNCTIES
// Arrow functies zijn geïntroduceerd in ES6.
// Met arrow functies kunnen we kortere functie syntax schrijven.

// EXAMPLE
// Normale functie.
function greet(name) {
    return "Hoi " + name;
}

const greeting = greet("Daniëlle");

console.log(greeting);

// Arrow functie stap 1.
// Je hebt geen function keyword, ipv daarvan heb je een =>
const greet2 = (name2) => {
    return "Hoi " + name2;
}
const greeting2 = greet2("Daniëlle");

console.log(greeting2);

// Arrow functie stap 2.
// Wanneer je de waarde gelijk wilt laten zien, kun je return weglaten.
const greet3 = (name3) => "Hoi " + name3;

const greeting3 = greet3("Daniëlle");

console.log(greeting3);

// Arrow functie stap 3.
// Als je maar 1 parameter heb dan kun je de () weglaten.
const greet4 = name4 => "Hoi " + name4;

const greeting4 = greet4("Daniëlle");

console.log(greeting4);