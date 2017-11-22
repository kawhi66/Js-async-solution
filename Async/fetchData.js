const fetch = require("node-fetch");
const getData = async function(url) {
    return await fetch(url)
};

// url: https://api.github.com/users/github
getData("https://api.github.com/users/github").then(data => {
    return data.json()
}).then(data => {
    console.log(data.bio)
});