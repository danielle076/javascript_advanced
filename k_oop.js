// OBJECT ORIENTED PROGRAMMING (OOP)
// Object-georiënteerd programmeren is een manier om code te schrijven die het mogelijk maakt verschillende objecten te
// creëren vanuit een algemeen object. Het algemene object wordt een blauwdruk genoemd, terwijl de gecreëerde objecten
// instanties worden genoemd.
// Elke instantie heeft eigenschappen die niet gedeeld worden met andere instanties. Bijvoorbeeld, als je een user
// blauwdruk hebt, kun je user instanties maken met verschillende namen.
// Het tweede aspect van Object-georiënteerd Programmeren gaat over het structureren van code wanneer je meerdere
// niveaus van blauwdrukken hebt. Dit wordt inheritance of subclassing genoemd.
// Het derde aspect van Object-georiënteerd programmeren gaat over inkapseling (encapsulation ), waarbij je bepaalde
// informatie in het object verbergt, zodat ze niet toegankelijk is.

// VOORBEELD
// We hebben twee objecten: user1 en user2. Deze hebben 1 methode “login” en deze heeft 1 parameter "inputPassword". De
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

// In programmeren is het niet handig om dingen te herhalen.

// CLASS & INSTANTIE
// Een class is een soort blauwdruk voor een object.

// We gaan de class "User" maken. Deze class wordt een blauwdruk van de User object. Dus je hebt 1 blauwdruk en van deze
// blauwdruk worden meerdere users gemaakt.
class User{}

// Wanneer je met een blauwdruk een user aanmaakt noem je dat een instantie.
new User()
console.log(new User()); // je krijgt een user object dat op dit moment leeg is: User {}

// Je kan meerdere users maken.
console.log("1", new User());
console.log("2", new User());
console.log("3", new User());

// We hebben nu 1 User class en 3 User instanties gemaakt.
// Hoe kan je zien dat er een instantie wordt gemaakt? Omdat er “new” voor de classnaam staat.

// CONSTRUCTOR
// We willen bereiken dat de user objecten “userName, email, password en loggedIn” een waarde krijgen in de class. Je
// kan dit doen door in de class een speciale functie te maken, genaamd constructor. De constructor wordt aangeroepen
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

// We zeggen “new user” en dan wordt de constructor aangeroepen. Dus als je een instantie maakt wordt de constructor aangeroepen.

// Volgende stap is de key values in de constructor zetten. Je kan naar een object verwijzen met het this keyword.
// Wanneer je de constructor aanroept krijg je het volgende.
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

// User4 is undefined omdat op het moment dat we de nieuwe users aanmaken geen argument geven.
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

// We hebben de new userName opgeslagen als this.userName.

// We gaan parameters en argumenten maken voor email (this.email, parameter en argument) en password (this.password, parameter en argument).
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
// 1 User6 { userName: 'Danielle', email: 'intoyou@gmail.com', password: '1234' }
// 2 User6 { userName: 'Freckle', email: 'freckle@gmail.com', password: 'abcd' }

// Sommige properties kun je meegeven als beginwaarde: this.loggedIn = false (als de gebruiker wordt aangemaakt ben je nog niet meteen ingelogd).
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
// 1 User7 {
//   userName: 'Danielle',
//   email: 'intoyou@gmail.com',
//   password: '1234',
//   loggedIn: false
// }
// 2 User7 {
//   userName: 'Freckle',
//   email: 'freckle@gmail.com',
//   password: 'abcd',
//   loggedIn: false
// }

// De logica van de methode “inputPassword” kun je in de class zetten.
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
// Wanneer je logged zie je niet de methode. Je ziet alleen de keys en de values.

// Maak de variabelen aan en controleer het wachtwoord.
const danielle = new User8("Danielle", "intoyou@gmail.com", "1234");
const freckle = new User8("Freckle", "freckle@gmail.com", "abcd");

danielle.login2("1234"); // Welcome Danielle, your logged in!
freckle.login2("1234"); // Wrong password, access denied!