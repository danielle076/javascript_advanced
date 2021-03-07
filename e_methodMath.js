// MATH METHODS
// Math.PI - is een property en geeft pi terug (3.141592653589793).
// Math.round() - rondt een getal af naar het dichtstbijzijnde hele getal.
// Math.sqrt() - geeft de wortel van een getal terug.
// Math.ceil() - rondt een getal naar boven af.
// Math.floor() - rondt een getal naar beneden af.
// Math.random() - genereert een random getal tussen 0 en 1.

// Math.PI is een property en geeft pi terug (3.141592653589793).
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(Math.PI); // geeft 3.141592653589793
console.log(calculateCircumference(10)); // geeft 62.83185307179586

// Math.round() rondt een getal af naar het dichtstbijzijnde hele getal.
console.log(Math.round(0.9)); // geeft 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // geeft 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); // geeft -5 -5 -6

// Math.sqrt() geeft de wortel van een getal terug.
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4)); // geeft 5
console.log(calcHypotenuse(5, 12)); // geeft 13
console.log(calcHypotenuse(0, 0)); // geeft 0

// Math.ceil() rondt een getal naar boven af.
console.log(Math.ceil(.95)); // geeft 1
console.log(Math.ceil(4)); // geeft 4
console.log(Math.ceil(7.004)); // geeft 8
console.log(Math.ceil(-7.004)); // geeft -7

// Math.floor() rondt een getal naar beneden af.
console.log(Math.floor(5.95)); // geeft 5
console.log(Math.floor(5.05)); // geeft 5
console.log(Math.floor(5)); // geeft 5
console.log(Math.floor(-5.05)); // geeft -6

// Math.random() genereert een random getal tussen 0 en 1.
// Als we een dobbelsteenworp simuleren, hebben we 6 mogelijkheden: een willekeurig getal tussen 1 en 6. Hoe maken we
// van dit willekeurige getal met Math.random een getal tussen 1 en 6?
// We vermenigvuldigen het eerst met 6, zodat we een getal krijgen. Vervolgens nemen we dat getal en voeren we Math.floor
// uit. Je ziet hier dat “n” wordt gebruikt als invoer voor deze functie floor, die naar beneden afrondt naar het
// dichtstbijzijnde gehele getal.
let n = Math.random();
n = n * 6;
n = Math.floor(n);
console.log(n);

// Als we de code uitvoeren, dan kun je zien dat we getallen tussen 0 en 5 krijgen. Het bereikt nooit 6.
// Om het te verhogen naar 6 hoeven we er alleen maar + 1 aan toe te voegen.
n = Math.floor(n) +1;