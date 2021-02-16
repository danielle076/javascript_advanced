// API IN DE DOM

// CHECKLIST INSTALLEREN
// - [] NPM installeren (npm init: installeert package.json)
// - [] Axios installeren (npm install axios: hiermee kun je data ophalen, installeert package-lock.json)

// CHECKLIST FILES
// - [] JS & HTML files maken (api.js en api.html)
// - [] JavaScript script file linken in HTML (<script src="j_unit.js"></script>)
// - [] Axios script linken in HTML (<script src="./node_modules/axios/dist/axios.min.js"></script>)

// CHECKLIST VOORBEELD API
// - [] URL opzoeken van de api (https://ignoble-api.herokuapp.com/prizes?year=2020)
// - [] Een async function maken en aanroepen
// - [] GET request maken -> axios.get(url)
// - [] Afwachten to de data er is (await de PROMISE)
// - [] Data weergeven in de DOM (response.data.prizes moet op de website komen)
//  - [] Lijst maken met een id (HTML)
//  - [] Lijst selecteren (via loop)
//  - [] Voor elke element in de array (via een loop)
//      - [] li aanmaken
//      - [] textContent toevoegen
// - [] Appenden

// log1 in browser: hi
console.log("Hi")

// log2 in browser: ƒ (){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}
console.log(axios);

// async functie maken en aanroepen
async function displayPrizes(){
    // log3 in browser: Hello
    console.log("Hello")
    const response = await axios.get("https://ignoble-api.herokuapp.com/prizes?year=2020");

    // log4 in browser: je krijgt het object met config, data, headers, request
    console.log("RESPONSE:", response);
    // log5 in browser: je krijgt een array van de data prizes
    console.log("RESPONSE:", response.data.prizes);

    // lijst "prize-list" selecteren
    const prizeList = document.getElementById("prize-list");
    // log6 in browser: lijst in console
    console.log(prizeList);

    // voor elke element in de array (via loop)
    for (const prize of response.data.prizes) {
        // log7 in browser: losse elementen prize lijst in console
        console.log("PRIZE:", prize);

        // een li aanmaken en textContent (year en description)
        const listItem = document.createElement("li");
        listItem.textContent = `${prize.year} - ${prize.type}: ${prize.description}`;
        // log8 in browser: <li> + jaar en beschrijving
        console.log(listItem);

        // li appenden, zodat we het op de pagina zien
        prizeList.appendChild(listItem);
    }
}

// aanroepen
displayPrizes();