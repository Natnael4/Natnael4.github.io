const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();
let cssSt = "";
if(hour >= 6 && hour <= 18){
    cssSt = '<link href="css/day.css" rel="stylesheet">';
}else{
    cssSt = '<link href="css/night.css" rel="stylesheet">';
}
app.use('/', function(req, res){
        let html5 = '<!DOCTYPE html>' +
            '<html lang="en">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '<title>Title</title>' +
             cssSt +
            '</head>' +
            '<body>' +
            '<form action="/result" method="POST">'+
            '<div>' +
            '<label for="name">Name: </label>'+
            '<input type="text" name="name" > '+
            '<label for="age">Age: </label> '+
            '<input type="text" id="age" name="age"> '+
            '<button type="submit">Submit Query</button>'+
            '</div>'+
            '</form>' +
            '</body>' +
            '</html>';
    res.send(html5);
});

app.use('/result', function(req, res){
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} , your age is ${age}`);
});

app.listen(3000);