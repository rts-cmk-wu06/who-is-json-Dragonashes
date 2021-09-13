// @ts-check
"use strict";
var persondata2 = {
    "personer": [{
        "fornavn": "Aske",
        "efternavn": "christiansen",
        "alder": 22,
        "hårfarve": "rød",
        "religion": false
    }, {
        "fornavn": "testshot",
        "efternavn": "schoenneman",
        "alder": 22,
        "hårfarve": "rød",
        "religion": true
    }, {
        "fornavn": "starfish",
        "efternavn": "asgaard",
        "alder": 22,
        "hårfarve": "rød",
        "religion": false
    }, {
        "fornavn": "flight proven",
        "efternavn": "vickers",
        "alder": 22,
        "hårfarve": "rød",
        "religion": false
    }]
};
for (var i = 0; i < persondata2.personer.length; i++) {
    console.log(persondata2.personer[i].fornavn);
}
for (var i = 0; i < persondata2.personer.length; i++) {
    console.log(persondata2.personer[i].efternavn);
}
var para = document.querySelector('dl');
var info = '<dt>' + 'People in this array is called: ' + '</dt>';
for (var i = 0; i < persondata2.personer.length; i++) {
    if (i === persondata2.personer.length - 1) {
        info +=
            '<dd>' + persondata2.personer[i].fornavn + '</dd>' +
            '<dd>' + persondata2.personer[i].efternavn + '</dd>' +
            '<dd>' + persondata2.personer[i].alder + '</dd>' +
            '<dd>' + persondata2.personer[i].hårfarve + '</dd>' +
            '<dd>' + persondata2.personer[i].religion + '</dd>' + '<br>'
    } else {
        info +=
            '<dd>' + persondata2.personer[i].fornavn + '</dd>' +
            '<dd>' + persondata2.personer[i].efternavn + '</dd>' +
            '<dd>' + persondata2.personer[i].alder + '</dd>' +
            '<dd>' + persondata2.personer[i].hårfarve + '</dd>' +
            '<dd>' + persondata2.personer[i].religion + '</dd>' + '<br>'
    }
}
// textContent
para.innerHTML = info;

// works with liveserver
fetch("./js/testdata2.json")
.then((response) => response.json())
// .then((data) => console.log(data))
.then((data) => {
    console.log(data)
    console.log(data.personer)
    console.log(data.personer[0])
    console.log(data.personer[0].fornavn)
})