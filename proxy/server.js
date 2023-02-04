//server.js
const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./config.js');
require('dotenv').config();

axios.get(process.env.URL)
	.then(response => {
		const headerData = response.headers && response.headers.date ? response.headers.date : 'no response date';
		console.log('Status code:', response.status);
		console.log("Received message: ", response.data);
	}).catch(err => {
		console.log('Error: ', err.message);
	});

app.get("/", async (req, res) => {
	try {
		response = await axios.get(process.env.URL);
		res.send(response.data);
	} catch (error) {
		console.log(error);
	}
});

module.exports = app;

