const { response } = require('express');
const express = require('express');
require('dotenv').config();
const drinks = require('./models/drinks.js');

const app = express();
const port = process.env.PORT || 3000;

app.get('/drinks', (req, res) => {
	res.send(drinks);
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
