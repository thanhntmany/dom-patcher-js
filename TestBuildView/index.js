const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');


var raw = fs.readFileSync('./landing.html', { encoding: 'utf8' });

console.log(raw);