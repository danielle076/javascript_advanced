// 1. Destructure price en refreshRate, en log ze in de console.
// Gegeven:
const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

// Uitkomst:
const { price, refreshRate } = product;
console.log(price, refreshRate); // geeft 379 50


// 2. Destructure type en brand en log ze in de console.
// Gegeven:
const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

// Uitkomst:
const { type, brand } = productInformation.general;
console.log(type, brand); // geeft 43PUS6504/12 Philips


// 3. Destructure wifi en bluetooth en log ze in de console.
// Gegeven:
const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

// Uitkomst:
const { wifi, bluetooth } = tvOptions.options.connectivity.popular;
console.log(wifi, bluetooth); // geeft true false


// 4. Destructure beide waardes uit deze array en log ze in de console.
// Gegeven:
const connectivity = ["wifi", "bluetooth"];

// Uitkomst:
const [wifiSignal, bluetoothSignal] = connectivity;
console.log(wifiSignal, bluetoothSignal); // geeft wifi bluetooth


// 5. Destructure de eerste en derde waarde uit deze array en log ze in de console.
// Gegeven:
const tvSizes = [41, 43, 46, 56, 65];

// Uitkomst:
const [first,, third] = tvSizes;
console.log(first, third); // geeft 41 46


// 6. Destructure name en adress uit de return value van deze functie en log ze in de console.
// Gegeven:
function getCompanyDetails() {
  return {
    name: "Novi Hogeschool",
    adress: "Zonnebaan 9, Utrecht",
  }
}

// Uitkomst:
const { name, adress } = getCompanyDetails();
console.log(name, adress); // geeft Novi Hogeschool Zonnebaan 9, Utrecht


// 7. Destructure beide zinnetjes uit de return value van deze functie en log ze in de console. Let op: de
// functie verwacht argumenten bij het aanroepen!
// Gegeven:
function getDetails(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

// Uitkomst:
const [nameString, ageString] = getDetails("Daniëlle", 37);
console.log(nameString, ageString); // Your name is Daniëlle You are 37 years old


// 8. We hebben een survey programma. In de terminal komt de vraag: How do you feel about JS basics? Hier kun je een
// antwoord op geven. Vervolgens krijg je de volgende vraag: Are you ready for React? Je krijgt opties om uit te
// kiezen en je kan extra informatie toevoegen die je kwijt wilt.
// Zorg ervoor dat dit programma een destructuring toegepast krijgt.

// const readline = require("readline-sync"); // npm install readline-sync
//
// const feeling = readline.question("How do you feel about JS basics?")
// console.log("Are you ready for React?")
// const options = [
//   "Yes",
//   "I don't know how to react...",
//   "No, but are we ever truly ready?",
// ];
// const choice = readline.keyInSelect(options);
//
// const anythingToAdd = readline.question("Any thoughts you want to add? ");
//
// console.log(`
// You feel: ${feeling}
// Ready for React? ${options[choice]}
// Additional thoughts: ${anythingToAdd}
// `);

const readline = require("readline-sync");
const { question, keyInSelect }  = readline

const feeling = question("How do you feel about JS basics?")
console.log("Are you ready for React?")
const options = [
  "Yes",
  "I don't know how to react...",
  "No, but are we ever truly ready?",
];
const choice = keyInSelect(options);

const anythingToAdd = question("Any thoughts you want to add? ");

console.log(`
You feel: ${feeling}
Ready for React? ${options[choice]}
Additional thoughts: ${anythingToAdd}
`);


// 9. We hebben een to do overzicht.
// Zorg ervoor dat dit programmaatje een destructuring toegepast krijgt.

// const todos = ["learn JavaScript", "learn React", "find colleagues"];
//
// console.log("First we", todos[0]);
// console.log("Then we", todos[1]);
// console.log("Finally", todos[2]);

const todos = ["learn JavaScript", "learn React", "find colleagues"];

const [JS, react, collagues] = todos

console.log("First we", JS);
console.log("Then we", react);
console.log("Finally", collagues);