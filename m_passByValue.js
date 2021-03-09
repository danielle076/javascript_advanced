// PASS BY VALUE
// Primitive datatype: string, number, boolean, undefined, null

// Verklaring & toewijzing
let firstName = "Danielle";
console.log(firstName) // geeft Danielle

let alias = firstName;

// Hernoemen
firstName = "Daantje";

// Wat is er gebeurd:
// 1. in het geheugen van firstName = Danielle
// 2. in het geheugen van alias komt dezelfde waarde als firstName = Danielle
// 3. het geheugen firstName wordt Daantje i.p.v. Danielle
// 4. het geheugen van alias veranderd niet
console.log(firstName); // geeft Daantje
console.log(alias); // geeft Danielle