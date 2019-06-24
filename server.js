const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');
 
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', function (req, res) {

    res.render('home',{
        name: 'jose gregorio'
    });
})

app.get('/about', function (req, res) {

    res.render('about');
})

app.get('/house', function (req, res) {

    var houses = [{
        number: 324,
        color: 'red',
        id:1
    },{
        number: 333,
        color: 'yellow',
        id:2
    }];

    res.send(houses)
})
 
app.listen(3000, ()=>{
    console.log("Escuchando puerto 3000");
});