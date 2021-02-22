// Gegeven Inventors
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
];


// 1. Filter de lijst op uitvinders die geboren zijn in de 16e eeuw.
// Uitkomst: [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]
const inventors16thCentury = inventors.filter(function(inventor) {
  return inventor.year >= 1500 && inventor.year <= 1600;
})

console.log("INVENTORS 16TH CENTURY:", inventors16thCentury);


// 2. Maak een array met daarin alle geboortejaren van de uitvinders.
// Uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];
const birthYears = inventors.map(function(inventor) {
  return inventor.year;
})

console.log("BIRTHYEARS:", birthYears);


// 3. Maak een array met daarin alle volledige namen van de uitvinders (voor- en achternaam als één string).
// Uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']
const fullNames = inventors.map((inventor) => {
  return inventor.first + " " + inventor.last;
})

console.log(fullNames);

// KORTERE VERSIE
// const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);


// 4. Sorteer de uitvinders op geboortejaar, oplopend van oudste naar jongste uitvinder.
// Uitkomst:
// [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
// ]
inventors.sort((a, b) => a.year - b.year);

console.log(inventors);


// 5. Sorteer de uitvinders op hoeveel jaren ze geleefd hebben, van langste leven naar kortste leven.
// Uitkomst:
// [
// { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]
inventors.sort((a, b) => {
  const yearsLivedA = a.passed - a.year;
  const yearsLivedB = b.passed - b.year;
  return yearsLivedB - yearsLivedA;
})

console.log(inventors);

// KORTERE VERSIE
// inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));


// 6. Vind de gegevens over de uitvinder wiens achternaam 'Edison' is.
// Uitkomst: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
const lastNameToFind = "Edison";

function findInventorByLastName(lastName) {
  for (let i = 0; i < inventors.length; i++) {
    const inventor = inventors[i];
    if (inventor.last === lastName) {
      return inventor;
    }
  }
}

const foundInventor = findInventorByLastName(lastNameToFind);
console.log("FOUND INVENTOR:", foundInventor);

// KORTE VERSIE
const foundInventor2 = inventors.find(function(inventor) {
  return inventor.last === "Edison";
});

console.log("FOUND INVENTOR2:", foundInventor2);

// KORTERE VERSIE
const foundInventor3 = inventors.find(inventor => inventor.last === "Edison");

console.log("FOUND INVENTOR3:", foundInventor3);