ejs = require('../lib/ejs.js');
data = ejs.render(`OK, so have fun! :D @<%= user %>`,{user:"hi"})
if (data==='OK, so have fun! :D @hi'){
    console.log('sucess!');
}else{
    throw new Error(`failure! ${data} isn't equal to OK, so have fun! :D @hi`);
}