// DATE METHODS
// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
// getDay() - geeft de dag van de week (0 - 6).
// getHours() - geeft het uur (0 - 23).
// getMinutes() - geeft de minuten (0 - 59).
// getMonth() - geeft de maand (0 - 11).
// getSeconds() - geeft het aantal seconden (0 - 59).

// DATE
// Wanneer je een nieuwe date instantie maakt zonder extra specificaties, zal deze automatisch ‘nu’ worden.
const today = new Date();
console.log(today);

// Als je een andere datum aan zou willen maken, zul je dit moeten specificeren. Dit kan op de volgende drie manieren.
const dateOfBirth1 = new Date("Dec 26, 1992 15:45:55");
const dateOfBirth2 = new Date(1992, 11, 26, 15, 45, 55);
const dateOfBirth3 = new Date(1992, 11, 26);
// Let op: tellen van de maand begint bij 0, dus januari is 0 en februari 1
console.log(dateOfBirth1); // geeft 1992-12-26T14:45:55.000Z
console.log(dateOfBirth2); // geeft 1992-12-26T14:45:55.000Z
console.log(dateOfBirth3); // geeft 1992-12-25T23:00:00.000Z

// getTime() - geeft het aantal milliseconden dat zijn verstreken sinds de epoch.
const moonLanding = new Date("July 20, 69 00:20:18 GMT+00:00");
// milliseconden sinds 1 jan 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime()); // geeft -14254782000

// getDay() - geeft de dag van de week (0 - 6).
const birthday = new Date("June 28, 1983 23:15:30");
const day1 = birthday.getDay(); // Zondag - Zaterdag : 0 - 6
console.log(day1); // geeft 2 (dinsdag)

const february = new Date("February 9, 2021 10:54:10");
const dayToday = february.getDay(); // Zondag - Zaterdag : 0 - 6
console.log(dayToday); // geeft 2 (dinsdag)

// getHours() - geeft het uur (0 - 23).
const hours = new Date("March 13, 08 04:20");
console.log(hours.getHours()); // geeft 4

// getMinutes() - geeft de minuten (0 - 59).
const minutes = new Date("March 13, 08 04:20");
console.log(minutes.getMinutes()); // geeft 20

// getMonth() - geeft de maand (0 - 11).
const month = new Date("July 20, 69 00:20:18");
console.log(month.getMonth()); // geeft 6 (juli)

// getSeconds() - geeft het aantal seconden (0 - 59).
const seconds = new Date("July 20, 69 00:20:18");
console.log(seconds.getSeconds()); // geeft 18