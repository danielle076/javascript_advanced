// 1. Gegeven
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// 1. Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// Uitkomst: 6
let cumLaude = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaude++;
    }
}

console.log(cumLaude);


// 2. Check welke waarde in de array het hoogste is en log dit in de console.
// Uitkomst: 9
let highestScore = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestScore) {
        highestScore = grades[i];
    }
}

console.log(highestScore);


// 3. Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// Uitkomst: 6.642857142857143
let averageScore = 0;

for (let i = 0; i < grades.length; i++) {
    averageScore = averageScore + grades[i];
}

console.log(averageScore / grades.length);