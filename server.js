var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 3306;



app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller');
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`I have begun eaves dropping on special number ${PORT}.`);
})