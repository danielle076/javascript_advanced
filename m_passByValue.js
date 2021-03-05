// PASS BY VALUE
// Primitive datatype: string, number, boolean, undefined, null
// Declaration & assignment
let firstName = "Danielle";
console.log(firstName) // geeft Danielle

let alias = firstName;

// Re-assignment
firstName = "Daantje";

// Wat is er gebeurd:
// 1: in het geheugen van firstName = Danielle
// 2: in het geheugen van alias komt dezelfde waarde als firstName = Danielle
// 3. het geheugen firstName wordt Daantje i.p.v. Danielle
// 4. het geheugen van alias veranderd niet
console.log(firstName); // Daantje
console.log(alias); // Danielle