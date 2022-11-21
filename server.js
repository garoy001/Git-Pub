const { response } = require('express');
const express = require('express');
require('dotenv').config();
//pull drink model
const drinks = require('./models/drinks.js');
//pull capitalize func
const func = require('./functions.js');
//pull food model
const food = require('./models/food.js');

// Run the capitalize function on all the drinks names
for (let element of drinks) {
	element.name = func.pubFunc(element.name);
}

const app = express();
const port = process.env.PORT || 3000;

app.get('/drinks', (req, res) => {
	res.render('drinks_index.ejs', { drinks, food });
});

app.get('/drinks/:id', (req, res) => {
	res.render('drinks_show.ejs', { drinks: drinks, drinkId: req.params.id });
});

app.get('/foods/:id', (req, res) => {
	res.render('food_show.ejs', { foods: food, foodId: req.params.id });
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
