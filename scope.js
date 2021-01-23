// JAVASCRIPT FUNCTIE SCOPE
// In JavaScript zijn er twee soorten scopes:
// * Local scope
// * Global scope

// Scope bepaalt de toegankelijkheid (zichtbaarheid) van de variabelen.
// Variabelen gedefinieerd binnen een functie zijn niet toegankelijk (zichtbaar) van buiten de functie.

// LOCAL JAVASCRIPT VARIABELEN
// Variabelen gedeclareerd binnen een JavaScript functie, worden LOCAL aan de functie.
// Lokale variabelen hebben functie scope: ze kunnen alleen worden benaderd vanuit de functie.

// Voorbeeld "example"
// Je gebruikt de variabele example in global scope, maar de variabele is defined in local scope
// Conclusie: variabele defined in local scope, aanroepen in global geeft ERROR

{
    const example = "Daniëlle";
}
console.log(example); // geeft: ReferenceError: example is not defined

// Omdat local variabelen alleen binnen hun functies worden herkend, kunnen variabelen met dezelfde naam gebruikt
// worden in verschillende functies.
// Local variabelen worden aangemaakt wanneer een functie begint, en verwijderd wanneer de functie voltooid is

// GLOBAL JAVASCRIPT VARIABELEN
// Een variabele die buiten een functie wordt gedeclareerd, wordt GLOBAL.
// Een global variabele heeft een globaal scope: alle scripts en functies op een webpagina hebben er toegang toe.

// voorbeeld "example2"

const example2 = "Daniëlle";

{
    console.log(example2); // geeft Daniëlle
}

// MEER VOORBEELDEN LOCAL EN GLOBAL SCOPE
// example 3: we hebben in de global scope example4 defined, we de hebben in de local example4 defined en dan pakt
// hij de waarde van local

const example3 = "Daniëlle";

{
    const example3 = "Karin";
    console.log(example3); // geeft Karin
}

// example 4 : we hebben in de global scope example5 defined, we de hebben in de local example5 defined en dan pakt
// hij de waarde van global

const example4 = "Daniëlle";

{
    const example4 = "Karin";

}
console.log(example4); // geeft Daniëlle

// JAVASCRIPT VARIABELEN
// In JavaScript zijn objecten en functies ook variabelen.

// AUTOMATISCH GLOBAL
// Als je een waarde toekent aan een variabele die niet is gedeclareerd, wordt het automatisch een GLOBAL-variabele.
// Dit codevoorbeeld zal een globale variabele declareren carName, zelfs als de waarde wordt toegewezen binnen een functie.

myFunction();

// code hier kan anotherExample gebruiken

function myFunction() {
    anotherExample = "Daniëlle";
}