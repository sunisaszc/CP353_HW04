var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1); 
var num = app.get('num'); 
console.log(num);	//1

app.use(function (req, res, next) { 
    console.log('Record	timestamp'); 
    next(); 
});

app.use(bodyParser.json());

app.post('/', function (req, res, next) { 
    var body = req.body;
    res.send('Hello World!' + body.a); 
});

app.post('/calculator/rest/minus', function (req, res, next) { 
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var obj = {
        "x":x,
        "y":y,
        "result x-y": x-y
    }
    res.send(obj); 
});

app.post('/calculator/rest/multiply', function (req, res, next) { 
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var obj = {
        "x":x,
        "y":y,
        "result x*y": x*y
    }
    res.send(obj); 
});

app.post('/calculator/rest/divide', function (req, res, next) { 
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var obj = {
        "x":x,
        "y":y,
        "result x/y": x/y
    }
    res.send(obj); 
});

app.get('/help', function (req, res, next) { 
    res.send('Help me'); 
});

app.listen(3000 , function () { 
    console.log('Already starting on port 3000');
});