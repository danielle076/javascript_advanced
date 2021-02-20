// PROGRAMMEREN MET CLASSES

// VOORBEELD
// We hebben twee objecten: user1 en user2. Deze hebben 1 methode “login” en deze heeft 1 parameter inputPassword. De
// functie vergelijkt de inputPassword met wat je in je account heb staan “1234” of “abcd”.
const user1 = {
    userName: "Danielle",
    email: "intoyou@gmail.com",
    password: "1234",
    loggedIn: false,
    login(inputPassword){
        if (inputPassword === this.password){
            this.loggedIn = true;
            console.log(`Welcome ${this.userName}, your logged in!`);
        } else {
            console.log("Wrong password, access denied!");
        }
    },
};

const user2 = {
    userName: "Freckle",
    email: "freckle@gmail.com",
    password: "abcd",
    loggedIn: false,
    login(inputPassword){
        if (inputPassword === this.password){
            this.loggedIn = true;
            console.log(`Welcome ${this.userName}, your logged in!`);
        } else {
            console.log("Wrong password, access denied!");
        }
    },
};

user1.login("1234"); // Welcome Danielle, your logged in!
user2.login("1234"); // Wrong password, access denied!

// Het is niet handig in programmeren om dingen te herhalen.

// CLASS & INSTANTIE
// Een class is een soort blauwdruk voor een object.

// We gaan de class "User" maken. Deze class wordt een blauwdruk van de User object. Dus je hebt 1 blauwdruk en van deze
// blauwdruk worden meerdere users gemaakt.
class User{}

// Wanneer je met een blauwdruk een user aanmaakt noem je dat een instantie maken.
new User()
console.log(new User()); // User {} >> je krijgt een user object dat op dit moment leeg is

// Je kan meerdere users maken.
console.log("1", new User());
console.log("2", new User());
console.log("3", new User());

// We hebben nu 1 user class en 3 user instanties gemaakt.
// Hoe kan je zien dat er een instantie wordt gemaakt? Omdat er “new” voor de classnaam staat.

// CONSTRUCTOR
// We willen bereiken dat de user objecten “userName, email, password en loggedIn” een waarde krijgen in de class. Je
// kan dit doen door in de class een speciale functie te maken, genaamd constructor. Die constructor wordt aangeroepen
// wanneer je de gebruiker instantieert.
class User2{
    constructor() {
        console.log("CONSTRUCTOR AANROEPEN");
    }
}

console.log("1", new User2());
console.log("2", new User2());
console.log("3", new User2());

// Geeft:
// CONSTRUCTOR AANROEPEN
// 1 User2 {}
// CONSTRUCTOR AANROEPEN
// 2 User2 {}
// CONSTRUCTOR AANROEPEN
// 3 User2 {}

// We hebben gezegd “new user” en dan wordt de constructor aangeroepen. Dus als je een instantie maakt wordt de
// constructor aangeroepen.

// Volgende stap is de key values in de constructor zetten. Je kan naar een object verwijzen met het this keyword.
// Wanneer je nu je constructor aanroept krijg je het volgende.

class User3{
    constructor() {
        console.log("CONSTRUCTOR AANROEPEN", this);
    }
}

console.log("1", new User3());
console.log("2", new User3());
console.log("3", new User3());

// Geeft:
// 1 User3 {}
// CONSTRUCTOR AANROEPEN User3 {}
// 2 User3 {}
// CONSTRUCTOR AANROEPEN User3 {}
// 3 User3 {}

// this verwijst naar de nieuwe user die wordt aangemaakt.

// Je kan de constructor een waarde geven door this.userName, maar de constructor moet ook een parameter krijgen zodat
// dingen ingegeven kunnen worden zoals “Freckle” of “Danielle”. Parameter wordt “userName”.
// this.userName wordt de userName die we krijgen wanneer het object wordt geïnstantieerd: this userName = username;

class User4{
    constructor(userName) {
        console.log("CONSTRUCTOR AANROEPEN", this);
        this.userName = userName;
    }
}

console.log("1", new User4());
console.log("2", new User4());
console.log("3", new User4());

// Geeft
// CONSTRUCTOR AANROEPEN User4 {}
// 1 User4 { userName: undefined }
// CONSTRUCTOR AANROEPEN User4 {}
// 2 User4 { userName: undefined }
// CONSTRUCTOR AANROEPEN User4 {}
// 3 User4 { userName: undefined }

// Dit is undefined omdat op het moment dat we de nieuwe users aanmaken geen argument geven.

class User5{
    constructor(userName) {
        console.log("CONSTRUCTOR AANROEPEN", this);
        this.userName = userName;
    }
}

console.log("1", new User5("Danielle"));
console.log("2", new User5("Freckle"));

// Geeft:
// CONSTRUCTOR AANROEPEN User5 {}
// 1 User5 { userName: 'Danielle' }
// CONSTRUCTOR AANROEPEN User5 {}
// 2 User5 { userName: 'Freckle' }

// We hebben de new userName opgeslagen als this.userName

// Dit doen we ook voor email. this.email, parameter en argument en voor voor password. this.password, parameter en argument

class User6{
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}

console.log("1", new User6("Danielle", "intoyou@gmail.com", "1234"));
console.log("2", new User6("Freckle", "freckle@gmail.com", "abcd"));

// Geeft:
// 1 User7 { userName: 'Danielle', email: 'intoyou@gmail.com', password: '1234' }
// 2 User7 { userName: 'Freckle', email: 'freckle@gmail.com', password: 'abcd' }

// Sommige properties kun je ook meegeven als beginwaarde. Dus als de gebruiker wordt aangemaakt ben je nog niet meteen ingelogd.

class User7{
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.loggedIn = false;
    }
}

console.log("1", new User7("Danielle", "intoyou@gmail.com", "1234"));
console.log("2", new User7("Freckle", "freckle@gmail.com", "abcd"));

// Geeft:
// 1 User8 {
//   userName: 'Danielle',
//   email: 'intoyou@gmail.com',
//   password: '1234',
//   loggedIn: false
// }
// 2 User8 {
//   userName: 'Freckle',
//   email: 'freckle@gmail.com',
//   password: 'abcd',
//   loggedIn: false
// }

// We willen de logica van de methode “inputPassword” ook delen, dit kun je makkelijk doen door de methode in de class te zetten.

class User8{
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.loggedIn = false;
    }
    login2(inputPassword){
        if (inputPassword === this.password){
            this.loggedIn = true;
            console.log(`Welcome ${this.userName}, your logged in!`);
        } else {
            console.log("Wrong password, access denied!");
        }
    }
}

console.log("1", new User8("Danielle", "intoyou@gmail.com", "1234"));
console.log("2", new User8("Freckle", "freckle@gmail.com", "abcd"));

// Wanneer je het logged, dan zie je niet die methode. Je ziet alleen de keys en de values.

// We gaan kijken of we hetzelfde kunnen laten werken als in het begin.
const danielle = new User8("Danielle", "intoyou@gmail.com", "1234");
const freckle = new User8("Freckle", "freckle@gmail.com", "abcd");

danielle.login2("1234"); // Welcome Danielle, your logged in!
freckle.login2("1234"); // Wrong password, access denied!