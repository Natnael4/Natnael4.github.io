const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();
let css1 = "";
if(hour >= 6 && hour <= 18){
    css1 = '<link href="css/day.css" rel="stylesheet">';
}else{
    css1 = '<link href="css/night.css" rel="stylesheet">';
}
app.get('/', function(req, res){
    let html5 = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>W3D5Lab</title>' +
         css1 +
        '</head>' +
        '<body>' +
        '<form action="/result" method="POST">'+
        '<div>' +
        '<label for="name">Name: </label>'+
        '<input type="text" name="name"> '+
        '<label for="age">Age: </label> '+
        '<input type="text" id="age" name="age"> '+
        '<button type="submit">Submit Query</button>'+
        '</div>'+
        '</form>' +
        '</body>' +
        '</html>';
    res.send(html5);
});

app.post('/result', function(req, res){
    let name = req.body.name;
    let age = req.body.age;
    res.redirect(`/output?name=${name}&age=${age}`);
});

app.get('/output', function(req, res){
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name} , your age is ${age}`);
});

app.listen(3000);