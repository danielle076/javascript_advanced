// SCOPE
// In JavaScript zijn er twee soorten scopes:
// * Local scope
// * Global scope

// Scope bepaalt de toegankelijkheid (zichtbaarheid) van de variabelen.
// Variabelen gedefinieerd binnen een functie zijn niet toegankelijk (zichtbaar) van buiten de functie.

// LOCAL VARIABELEN
// Variabelen gedeclareerd binnen een functie, worden lokaal aan de functie.
// Local variabelen hebben functie scope: ze kunnen alleen worden benaderd vanuit de functie.

// VOORBEELD EXAMPLE
// Je gebruikt de variabele example in global scope, maar de variabele is defined in local scope.
// Uitkomst: variabele defined in local scope en aanroepen in global geeft error.

{
    const example = "Daniëlle";
}
console.log(example); // geeft: ReferenceError: example is not defined

// Omdat local variabelen alleen binnen hun functies worden herkend, kunnen variabelen met dezelfde naam gebruikt
// worden in verschillende functies.
// Local variabelen worden aangemaakt wanneer een functie begint en verwijderd wanneer de functie voltooid is.

// GLOBAL VARIABELEN
// Een variabele die buiten een functie wordt gedeclareerd, wordt global.
// Een global variabele heeft een global scope: alle scripts en functies op een webpagina hebben er toegang toe.

// Voorbeeld "example2".

const example2 = "Daniëlle";

{
    console.log(example2); // geeft Daniëlle
}

// MEER VOORBEELDEN LOCAL EN GLOBAL SCOPE
// Example 3: we hebben in de global scope "example3" defined en we de hebben in de local "example3" defined.
// Uitkomst: hij pakt de waarde van local.

const example3 = "Daniëlle";

{
    const example3 = "Freckle";
    console.log(example3); // geeft Freckle
}

// Example 4: we hebben in de global scope "example4" defined en we de hebben in de local "example4" defined.
// Uitkomst: hij pakt de waarde van global.

const example4 = "Daniëlle";

{
    const example4 = "Freckle";

}
console.log(example4); // geeft Daniëlle

// VARIABELEN
// In JavaScript zijn objecten en functies ook variabelen.

// AUTOMATISCH GLOBAL
// Als je een waarde toekent aan een variabele die niet is gedeclareerd, wordt het automatisch een global variabele.
// Dit voorbeeld zal een globale variabele anotherExample declareren, zelfs als de waarde wordt toegewezen binnen een functie.

myFunction();

// code kan hier anotherExample gebruiken

function myFunction() {
    banana = "zijn lekker.";
}

console.log("Banana", banana)