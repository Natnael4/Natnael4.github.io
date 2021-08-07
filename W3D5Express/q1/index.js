const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "Natnael";
    }
    if (!age) {
        age = '24';
    }
    res.send(`Welcome ${name}. Your age is ${age}.`);
});
app.listen(3000);