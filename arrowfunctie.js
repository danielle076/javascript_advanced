// ARROW FUNCTIES
// Arrow functies zijn geïntroduceerd in ES6.
// Met arrow functies kunnen we kortere functie syntaxis schrijven

// EXAMPLE
// normale functie
function greet(name) {
    return "Hoi " + name;
}

const greeting = greet("Daniëlle");

console.log(greeting);

// arrow functie stap 1
// je hebt geen function keyword, ipv daarvan heb je een =>
const greet2 = (name2) => {
    return "Hoi " + name2;
}
const greeting2 = greet2("Daniëlle");

console.log(greeting2);

// arrow functie stap 2
// wanneer je de waarde gelijk wilt laten zien, kun je ook return weglaten
const greet3 = (name3) => "Hoi " + name3;

const greeting3 = greet3("Daniëlle");

console.log(greeting3);

// arrow functie stap 3
// als je maar 1 parameter heb dan kun je ook de () weglaten
const greet4 = name4 => "Hoi " + name4;

const greeting4 = greet4("Daniëlle");

console.log(greeting4);