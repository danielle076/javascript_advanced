// ZELF METHODEN MAKEN

// Leerdoelen
// - Je weet dat je eigen methoden kan toevoegen aan objecten
// - Je weet dat je in methoden naar het object kan refereren met het "this" keyword

// WAT IS EEN METHODE?

// Voorbeeld1, we hebben een String “userName”.
const userName = "Daniëlle";

// Het String object heeft ingebouwde methodes, bijvoorbeeld toUpperCase()
console.log(userName.toUpperCase()); // DANIËLLE

// Voorbeeld 2
const number = 201.890035

// Wat voor methodes zitten er op number, bijvoorbeeld alle getallen achter de komma afronden: 201.9
console.log(number.toFixed(1)) // 201.9

// Conclusie: er zijn al heel veel methodes ingebouwd in JavaScript.

// HOE KUNNEN WE DE METHODEN TOEVOEGEN AAN DE EIGEN OBJECTEN

// Dit is een land (country) met een object
const country = {
    name: "United States of America",
    capital : "Washington, D.C.",
    region: "Americas",
    subregion: "Northern America",
    population: 323947000,
    flag: "https://restcountries.eu/data/usa.svg",
};

function countryGeographyString(name, subregion, population){
    return `${name} is situated in ${subregion}. It has a population of ${(population / 1000000).toFixed(2)} million`;
}

console.log(countryGeographyString(country.name, country.subregion, country.population));
// Je ziet bij de console dat je elke keer hetzelfde object “country” moet invullen om de juiste gegevens uit de console te krijgen.
// Om dit anders te doen is om van function countryGeographyString een methode te maken van een country object.