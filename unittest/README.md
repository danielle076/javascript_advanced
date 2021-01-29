### Unit test (met jest)

Om jest te gaan gebruiken voor je unit testen, moet je hem eerst installeren. Dit doe je voor elk project.

Ga naar WebStorm of een andere JavaScript IDE en doe de volgende stappen:
1. ga in je map/project staan die je wilt gaan unit testen 
2. ga naar je terminal en type "npm init" package.json wordt aangemaakt
3. type in je terminal "npm install -D jest" en jest wordt geïnstalleerd
4. maak een test bestand aan in je map en die noem je "projectnaam.test.js"

Wanneer je test en functies heb geschreven kun je deze als volgt testen in terminal:
- met "npx jest" voer je de test 1-malig uit 
- met "npx jest –watchAll" zal hij bij aanpassing automatisch de test uitvoeren 
- met ctrl + c kun je de test stoppen

Wanneer je er voor kiest om de functies in een andere file te zetten moet je ze kunnen linken met je test file (anders kun je niks testen). Dit doe je met import en export.
* index.js ga je exporteren
* index.test.js ga je importeren

Een voorbeeld (zie ook de files index.js en index.test.js)<br/>

index.js ga je exporteren
```bash
module.exports = {
add: add,
findByName: findByName
};
```

index.test.js ga je importeren
```bash
const add = require("./index").add;
const findByName = require("./index").findByName;
```