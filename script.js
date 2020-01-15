const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=mlN6QcDaWMQkSS0yGV44t4ODAgZ1i9jh`
const key = "userkey"

const buttons = document.querySelectorAll(".buttons");
const search = document.querySelector("#search");
const startInp = document.querySelector("#start-date");
const endInp = document.querySelector("#end-date");
const clear = document.querySelector("#clear");
const artDiv = document.createElement("div")
const articleHead = document.createElement("h3")
const artText = document.createElement("p")

//#numResults


fetch(url) 
    .then(function(response) {
        return response.json();
        
    })
    .then(function(json) {
        console.log(json);
        for (i = 0; i < json.response.docs.length; i ++) {
            let abstract = json.response.docs[i].abstract;
            let headline = json.response.docs[i].headline.main;
            console.log(abstract)
            console.log(headline)
        }
    });

