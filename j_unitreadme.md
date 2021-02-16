## Waarom unit testen
Unit testen is een vorm van software testen waarbij individuele componenten van een software worden getest.<br/>
Unit testen van software producten worden uitgevoerd tijdens de ontwikkeling van een applicatie. Een individuele component kan zowel een individuele functie als een procedure zijn. Unit testen worden meestal uitgevoerd door de ontwikkelaar.

<b>Het doel van Unit testen is:</b>
- Het isoleren van een deel van de code
- De juistheid van de code te verifiëren
- Elke functie en procedure te testen
- Bugs vroeg in de ontwikkelingscyclus op te lossen en kosten te besparen
- Ontwikkelaars helpen de code te begrijpen en hen in staat te stellen snel veranderingen aan te brengen
- Helpen bij hergebruik van code

<b>Voordelen van Unit Testen:</b>
- Unit testen stelt ontwikkelaars in staat om te leren welke functionaliteit door een unit wordt geleverd en hoe deze te gebruiken om een basis begrip van de unit te krijgen
- Unit testen stelt de programmeur in staat om code te verfijnen en ervoor te zorgen dat de module goed werkt
- Unit testen maakt het mogelijk om delen van het project te testen zonder te wachten tot anderen klaar zijn


## Unit test (met jest)
Om jest te gaan gebruiken voor je unit testen, moet je hem eerst installeren. Dit doe je voor elk project.

Ga naar WebStorm of een andere JavaScript IDE en doe de volgende stappen:
1. ga in je map/project staan die je wilt gaan unit testen 
2. ga naar je terminal en type "npm init" en package.json wordt aangemaakt
3. type in je terminal "npm install -D jest" en jest wordt geïnstalleerd
4. maak een test bestand aan in je map en die noem je "projectnaam.test.js"

Wanneer je test en functies hebt geschreven kun je deze als volgt testen in terminal:
- met "npx jest" voer je de test 1-malig uit 
- met "npx jest -watchAll" zal hij bij elke aanpassing automatisch de test uitvoeren 
- met ctrl + c kun je de test stoppen

Wanneer je er voor kiest om de functies in een andere file te zetten moet je ze kunnen linken met je test file (anders kun je niks testen). Dit doe je met import en export.
* j_unit.js ga je exporteren
* j_unit.test.js ga je importeren

Een voorbeeld (zie ook de files j_unit.js en j_unit.test.js)<br/>

j_unit.js ga je exporteren
```bash
module.exports = {
add: add,
findByName: findByName
};
```

j_unit.test.js ga je importeren
```bash
const add = require("./index").add;
const findByName = require("./index").findByName;
```