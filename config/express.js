var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
    
    var app = express();


    app.use(express.static('./app/public/'));
    app.set('view engine','ejs');
    app.set('views','./app/views');//setando localização das views pro express
    
    app.use(bodyParser.urlencoded({extended: true}));
    //middleware, analisa se é json
    app.use(bodyParser.json());

    app.use(expressValidator());


    load('routes', { cwd: 'app'})
        .then('infra')
        .into(app)

    return app;
}
