const { timeStamp } = require('console');
const express = require('express'); 
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
 const date = new Date();
 const times = date.getHours()
 
 res.render("index", {
 time: date.toTimeString(),
 hour: times,
 });
});
app.listen(3000, ()=> {
    console.log("server running...")
});