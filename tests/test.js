ejs = require('../lib/ejs.js')
console.log(ejs.render(`OK, so have fun! :D @<%= user %>`,{user:"hi"}))