// JAVASCRIPT JSON
// JSON is een formaat voor het opslaan en transporteren van gegevens.
// JSON wordt vaak gebruikt wanneer gegevens van een server naar een webpagina worden gestuurd.

// WAT IS JSON?
// JSON staat voor JavaScript Object Notation.
// JSON is een lichtgewicht formaat voor gegevensuitwisseling
// JSON is taal onafhankelijk *
// JSON is "zelf-beschrijvend" en gemakkelijk te begrijpen
// * De JSON syntaxis is afgeleid van de JavaScript object notatie syntaxis, maar het JSON formaat is alleen tekst. Code
// voor het lezen en genereren van JSON-gegevens kan in elke programmeertaal worden geschreven.

// WAAROM JSON?
// Het is heel handig dat we objecten en arrays hebben in JavaScript, maar deze datastructuren kunnen we niet over het
// netwerk verzenden. Sterker nog: het enige wat we van de ene naar de andere computer kunnen sturen, is platte tekst.
// Daarom gebruiken we JSON om JavaScript-data van de ene computer naar de andere te krijgen.

// HOE JSON?
// In JSON moeten de object keys altijd binnen dubbele aanhalingstekens staan. Enkele aanhalingstekens worden niet
// geaccepteerd. Het andere grote verschil is dat hoewel we in JavaScript altijd een komma plaatsen na ieder key-value
// pair, we in JSON geen komma plaatsen na de laatste entry.

// JAVASCRIPT OMZETTEN NAAR JSON
// We kunnen het JSON object gebruiken om JSON te maken of om te zetten:
// * JSON.stringify() converteert een JavaScript object naar platte tekst, gebruikmakend van de JSON syntax. De data
// die we willen omzetten, geven we als parameter mee aan de methode.
// * JSON.parse() converteert platte tekst met JSON data terug naar een JavaScript object. De data die we willen
// omzetten, geven we als parameter mee aan de methode.

// JSON VOORBEELD #1
// Deze JSON syntax definieert een werknemers object: een array van 3 werknemers records (objecten).
{
    [
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

// JSON VOORBEELD #2
[
    {
        "firstName":"Henk",
        "lastName":"Jansen",
        "grades":
            {"java":8,
                "htmlAndCss":4,
                "javascript":9,
                "react":7
            },
        "unfollowedCourses":["Springboot","Databases"]
    },
    {
        "firstName":"Piet",
        "lastName":"Pieters",
        "grades":
            {
                "databases":6,
                "java":4,
                "htmlAndCss":9,
                "javascript":8
            },
        "unfollowedCourses": ["React","Springboot"]
    }
]