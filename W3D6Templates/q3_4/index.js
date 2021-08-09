const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({extended: false}));

let products = [{name:"Harry Potter",description: "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.", price: 15.45, id:1 },
    {name: "A Tale of Two Cities",description: "A Tale of Two Cities is an 1859 historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. ", price: 8.50, id:2 },
    { name: "The Handmaid's Tale",description: "The Handmaid's Tale is a dystopian novel by Canadian author Margaret Atwood", price: 12.00, id:3 },
    {name: "Gulliver's Travels",description: "Gulliver's Travels is an adventure story (in reality, a misadventure story) involving several voyages of Lemuel Gulliver, a ship's surgeon, who, because of a series of mishaps en route to recognized ports, ends up, instead, on several unknown islands living with people and animals of unusual sizes, behaviors", price: 13.65, id:4 }];
app.get('/', (req, res) => {
    res.render("product", {
        products: products,
    });
});

let cartProducts = [];
app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    let price = req.body.price;
    let description = req.body.description;
    cartProducts.push({"id": id, "name": name, "price": price, "description": description});
    res.render("shoppingcart", {
        cartProducts: cartProducts,
    });
});
app.listen(3000, ()=>{
    console.log("server running...")
});