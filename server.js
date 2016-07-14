'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on ' + server.address().port);
});
