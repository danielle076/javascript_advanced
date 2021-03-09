// PASS BY REFERENCE
// Object datatypes: Object, Array

// Verklaring & toewijzing
let pet = {
    name: "Freckle",
};

console.log(pet); // geeft { name: 'Freckle' }

let petEvilTwin = pet;

console.log(petEvilTwin); // geeft { name: 'Freckle' }

// Hernoemen
pet.name = "Fabian"

// Wat is er gebeurd:
// 1. in het geheugen van pet = het object { name: 'Freckle' }
// 2. in het geheugen van petEvilTwin komt dezelfde waarde als pet = het object { name: 'Freckle' }
// 3. het geheugen pet.name wordt Fabian i.p.v. Freckle
// 4. het geheugen van petEvilTwin veranderd mee omdat het hetzelfde geheugen is als pet = het object { name: 'Fabian' }
// DUS: we hebben een nieuwe referentie "petEvilTwin" maar verwijst naar hetzelfde object
console.log(pet); // geeft { name: 'Fabian' }
console.log(petEvilTwin); // geeft { name: 'Fabian' }

// Hoe kun je ervoor zorgen dat petEvilTwin niet hetzelfde is als pet?
// Een kopie maken van het object
// We maken een nieuw object aan en kopiëren de waarde (name is een primitieve datatype)
let pet2 = {
    name: "Freckle",
};

console.log("PET2", pet2); // geeft PET2 { name: 'Freckle' }

let petEvilTwin2 = {
    name: pet2.name,
};

console.log("PET2", petEvilTwin2); // geeft PET2 { name: 'Freckle' }

// Hernoemen
pet2.name = "Fabian"

// Wat er nu gebeurd:
// 1. in het geheugen van pet2 = het object { name: 'Freckle' }
// 2. in het geheugen van petEvilTwin2 komt dezelfde waarde als pet2 = het object { name: 'Freckle' }
// 3. het geheugen pet2.name wordt Fabian i.p.v. Freckle
// 4. het geheugen van petEvilTwin2 veranderd niet mee omdat het een ander geheugen is als pet2 = het object { name: 'Freckle' }
console.log("PET2", pet2); // geeft PET2 { name: 'Fabian' }
console.log("PET2", petEvilTwin2) // geeft PET2 { name: 'Freckle' }