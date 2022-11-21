const { response } = require('express');
const express = require('express');
require('dotenv').config();
//pull drink model
const drinks = require('./models/drinks.js');
//pull capitalize func
const func = require('./functions.js');

// Run the capitalize function on all the drinks names
for (let element of drinks) {
	element.name = func.pubFunc(element.name);
}

const app = express();
const port = process.env.PORT || 3000;

app.get('/drinks', (req, res) => {
	res.render('drinks_index.ejs', { drinks });
});

app.get('/drinks/:id', (req, res) => {
	res.render('drinks_show.ejs', { drinkId: req.params.id });
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
