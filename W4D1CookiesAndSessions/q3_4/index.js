const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({extended: false}));


var parseurl = require('parseurl')
var session = require('express-session')

app.use(session({
    resave: false,
    saveUninitialized: false, 
    secret: 'wap lab',
}));


app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {}
    }
    var pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    next()
})

let products = [{name:"Harry Potter",description: "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.", price: 15.45, id:1 },
    {name: "A Tale of Two Cities",description: "A Tale of Two Cities is an 1859 historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. ", price: 8.50, id:2 },
    { name: "The Handmaid's Tale",description: "The Handmaid's Tale is a dystopian novel by Canadian author Margaret Atwood", price: 12.00, id:3 },
    {name: "Gulliver's Travels",description: "Gulliver's Travels is an adventure story (in reality, a misadventure story) involving several voyages of Lemuel Gulliver, a ship's surgeon, who, because of a series of mishaps en route to recognized ports, ends up, instead, on several unknown islands living with people and animals of unusual sizes, behaviors", price: 13.65, id:4 }];
app.get('/', (req, res) => {
    res.render("product", {
        products: products,
    });
});

session.cartProducts = [];

app.post('/addToCart/book/1', (req, res) => {
    let count = req.session.views['/addToCart/book/1'];
    if(count <= 1){
        let name = req.body.name;
        let id = req.body.id;
        let price = req.body.price;
        let description = req.body.description;
        session.cartProducts.push({"id": id, "name": name, "price": price, "description": description, "quantity": count});
    }else{
        session.cartProducts[0].price = parseFloat(req.body.price) * count;
        session.cartProducts[0].quantity = count;
    }
    res.render("shoppingcart", {
        cartProducts: session.cartProducts,
    });
});
app.post('/addToCart/book/2', (req, res) => {
    let count2 = req.session.views['/addToCart/book/2'];
    if(count2 <= 1){
        let name = req.body.name;
        let id = req.body.id;
        let price = req.body.price;
        let description = req.body.description;
        session.cartProducts.push({"id": id, "name": name, "price": price, "description": description, "quantity": count2});
    }else{
        session.cartProducts[1].price = parseFloat(req.body.price) * count2;
        session.cartProducts[1].quantity = count2;
    }
    res.render("shoppingcart", {
        cartProducts: session.cartProducts,
    });
});
app.post('/addToCart/book/3', (req, res) => {
    let count3 = req.session.views['/addToCart/book/3'];
    if(count3 <= 1){
        let name = req.body.name;
        let id = req.body.id;
        let price = req.body.price;
        let description = req.body.description;
        session.cartProducts.push({"id": id, "name": name, "price": price, "description": description, "quantity": count3});
    }else{
        session.cartProducts[2].price = parseFloat(req.body.price) * count3;
        session.cartProducts[2].quantity = count3;
    }
    res.render("shoppingcart", {
        cartProducts: session.cartProducts,
    });
});
app.listen(3000, ()=>{
    console.log("server running...")
});