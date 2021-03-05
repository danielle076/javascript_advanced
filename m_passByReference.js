// PASS BY REFERENCE
// Object datatypes: Object, Array
// Declaration & assignment
let pet = {
    name: "fluffykins",
};

console.log(pet); // geeft { name: 'fluffykins' }

let petEvilTwin = pet;

console.log(petEvilTwin); // geeft { name: 'fluffykins' }

// Re-assignment
pet.name = "vlekkie"

// Wat is er gebeurd:
// 1: in het geheugen van pet = het object { name: 'fluffykins' }
// 2: in het geheugen van petEvilTwin komt dezelfde waarde als pet = het object { name: 'fluffykins' }
// 3. het geheugen pet.name wordt vlekkie i.p.v. fluffykins
// 4. het geheugen van petEvilTwin veranderd mee omdat het hetzelfde geheugen is als pet = het object { name: 'vlekkie' }
// DUS: we hebben een nieuwe referentie "petEvilTwin" maar verwijst naar hetzelfde object (geen kopie)
console.log(pet); // geeft { name: 'vlekkie' }
console.log(petEvilTwin); // geeft { name: 'vlekkie' }

// Hoe kun je ervoor zorgen dat petEvilTwin niet hetzelfde is als pet?
// Een kopie maken van het object
// We maken een nieuw object aan en kopiëren de waarde (name is een primitieve datatype)
let pet2 = {
    name: "fluffykins",
};

console.log("PET2", pet2); // geeft PET2 { name: 'fluffykins' }

let petEvilTwin2 = {
    name: pet2.name,
};

console.log("PET2", petEvilTwin2); // geeft PET2 { name: 'fluffykins' }

// Re-assignment
pet2.name = "vlekkie"

// Wat er nu gebeurd:
// 1: in het geheugen van pet = het object { name: 'fluffykins' }
// 2: in het geheugen van petEvilTwin komt dezelfde waarde als pet = het object { name: 'fluffykins' }
// 3. het geheugen pet.name wordt vlekkie i.p.v. fluffykins
// 4. het geheugen van petEvilTwin veranderd niet mee omdat het een ander geheugen is als pet = het object { name: 'fluffykins' }

console.log("PET2", pet2); // geeft PET2 { name: 'vlekkie' }
console.log("PET2", petEvilTwin2) // geeft PET2 { name: 'fluffykins' }