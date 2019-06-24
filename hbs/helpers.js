var hbs = require('hbs');

hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize',(text)=>{
    var words = text.split(' ');
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });

    return words.join(' ');
});
