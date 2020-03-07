var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 
var PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.static('app/public'));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log(`Connected on port: ${PORT}`);
});
