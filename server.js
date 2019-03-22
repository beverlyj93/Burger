var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller');
app.use('/', routes);

app.listen(3000, () => {
    console.log('I have begun eaves dropping on special number 3000.');
})