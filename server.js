const { response } = require('express');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/drinks', (req, res) => {
	
})

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});