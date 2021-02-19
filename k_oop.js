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

// Je gaat in het country object een methode zetten:
const country2 = {
    name: "United States of America",
    capital : "Washington, D.C.",
    region: "Americas",
    subregion: "Northern America",
    population: 323947000,
    flag: "https://restcountries.eu/data/usa.svg",
    countryGeographyString(){
        console.log("HI!")
    }
};

// Roep de methode aan met country.countryGeographyString();
country2.countryGeographyString();

// Nu willen we dit in de functie krijgen. In de methode zet je het woordje “this”
const country3 = {
    name: "United States of America",
    capital : "Washington, D.C.",
    region: "Americas",
    subregion: "Northern America",
    population: 323947000,
    flag: "https://restcountries.eu/data/usa.svg",
    countryGeographyString(){
        console.log("WHAT IS THIS?", this)
    }
};

country3.countryGeographyString();

// This verwijst naar het hele object, want bij het aanroepen “country3.countryGeographyString();” doe je eigenlijk “country3.myMethod”
// Het voordeel hiervan is dat je met “this” bij alle informatie van het object kan.

// De informatie uit de functie zet je in de methode, met this. i.p.v. country:
const country4 = {
    name: "United States of America",
    capital : "Washington, D.C.",
    region: "Americas",
    subregion: "Northern America",
    population: 323947000,
    flag: "https://restcountries.eu/data/usa.svg",
    countryGeographyString(){
        return `${this.name} is situated in ${this.subregion}. It has a population of ${(this.population / 1000000).toFixed(2)} million`
    }
};

console.log("INFO:", country4.countryGeographyString()); // INFO: United States of America is situated in Northern America. It has a population of 323.95 million

// Conclusie: je hoeft nu geen parameters meer in te geven bij de functie. Reden, omdat de functie als een methode op het
// country object zit, kan hij direct bij data.

// Je kan dit verder uitbouwen. Je ziet bijvoorbeeld bij population dat er een berekening inzit om aan miljoenen te komen.
// Met een nieuwe methode kun je deze berekening daarin zetten.

const country5 = {
    name: "United States of America",
    capital : "Washington, D.C.",
    region: "Americas",
    subregion: "Northern America",
    population: 323947000,
    flag: "https://restcountries.eu/data/usa.svg",
    getPopulationInMillions(){
        (this.population / 1000000).toFixed(2);
    },
    countryGeographyString(){
        return `${this.name} is situated in ${this.subregion}. 
        It has a population of ${this.getPopulationInMillions()} million`;
    }
};

console.log("INFO5:", country5.countryGeographyString());

// geeft INFO5: United States of America is situated in Northern America.
//         It has a population of undefined million

// Er is niet gereturned dus krijg je “undefined”.

const country6 = {
    name: "United States of America",
    capital : "Washington, D.C.",
    region: "Americas",
    subregion: "Northern America",
    population: 323947000,
    flag: "https://restcountries.eu/data/usa.svg",
    getPopulationInMillions(){
        return (this.population / 1000000).toFixed(2);
    },
    countryGeographyString(){
        return `${this.name} is situated in ${this.subregion}. 
        It has a population of ${this.getPopulationInMillions()} million`;
    }
};

console.log("INFO6:", country6.countryGeographyString());