const endPoint = `https://ru.wikipedia.org/w/api.php?
action=query&
list=search&
prop=info&
inprop=url&
utf8=&
format=json&
origin=*&
srlimit=10&
srsearch=`;

const randomEndPoint = `https://ru.wikipedia.org/w/api.php?
action=query&
list=random&
rnnamespace=0&
prop=info&
utf8=&
format=json&
inprop=url&
rnlimit=5&
origin=*`;

let search = document.getElementById("search");
let results = document.getElementById("results");
let searchBtn = document.getElementById("searchBtn");
let resetBtn = document.getElementById("resetBtn");
let random = document.getElementById("random");


function getResults(searchQuery = "random") {
    let point, results;

    if (searchQuery === "random") point = randomEndPoint;
    else point = endPoint + `${searchQuery}`;

    axios.get(point)
    .then(response => response.data)
    .then(data => {
        if (searchQuery === "random") results = data.query.random;
        else results = data.query.search;
        for (let i = 0; i < results.length; i++) displayResult(results[i]);
    });
}

//Вариант с использованием fetch
///////////////////////////////////////////
// function getResults(searchQuery = "random") {
//     let point, results;
//
//     if (searchQuery === "random") point = randomEndPoint;
//     else point = endPoint + `${searchQuery}`;
//
//     fetch(point)
//     .then(response => response.json())
//     .then(data => {
//         if (searchQuery === "random") results = data.query.random;
//         else results = data.query.search;
//
//         for (let i = 0; i < results.length; i++) displayResult(results[i]);
//     });
// }
////////////////////////////////////////////////////

function displayResult(article) {
    if (article.snippet) {
        results.innerHTML += "<div><a href='https://ru.wikipedia.org/wiki/" + article.title + "' target='_blank'><p><strong>" + article.title + "</strong></p><p>" + article.snippet + "</p></a></div><hr>";
    }
    else {
        results.innerHTML += "<div><a href='https://ru.wikipedia.org/wiki/" + article.title + "' target='_blank'><p><strong>" + article.title + "</strong></p><hr>";
    }
}

function clearResults() {
    results.innerHTML = "";
  }

searchBtn.addEventListener("click", () => {
    clearResults();
    let query = search.value;
    if (query) getResults(query);
})

resetBtn.addEventListener("click", () => {
    clearResults();
    search.value = "";
})

random.addEventListener("click", () => {
    clearResults();
    getResults();
})

