const url = "https://raw.githubusercontent.com/ElevenfiftyAcademy/fetch-lesson/main/presidents.json";

async function fetchPresidents() {
    // await is another promise resolver
    const response = await fetch(url);
    let data = await response.json();
    return data;
}

function getPresidentsByYear(startYear, endYear, presidents) {
    return presidents.filter((president) =>
        president.year >= startYear && president.year <= endYear
    );
}

async function run() {
    const presidents = await fetchPresidents();
    updateList(presidents);

    // let presidentsByYear = getPresidentsByYear(1700, 1799, presidents);
    // console.log(presidentsByYear);
}

function createPresident(parentDiv, presidentObj) {
    let div = document.createElement("div");
    div.innerText = `${presidentObj.year}: ${presidentObj.first} ${presidentObj.last}`;
    parentDiv.appendChild(div);
}

function updateList(allPresidents) {
    let start = document.getElementById("startYear");       // input
    let end = document.getElementById("endYear");           // input
    let parentDiv = document.getElementById("presidents");  // div
    
    parentDiv.innerHTML = "";

    let startYear = start.value;
    let endYear = end.value;

    let presidents = getPresidentsByYear(startYear, endYear, allPresidents);
    for (const prez of presidents) {
        createPresident(parentDiv, prez);
    }
}

// Invoking a function, or running, or executing, or calling
// run();
let button = document.getElementById("update");
button.addEventListener("click", run);