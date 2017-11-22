"use strict";

var fetch = require("node-fetch");
var getData = async function getData(url) {
    return await fetch(url);
};

// url: https://api.github.com/users/github
getData("https://api.github.com/users/github").then(function (data) {
    return data.json();
}).then(function (data) {
    console.log(data.bio);
});
