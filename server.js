const express = require('express');

const app = express();

app.use('/bin', express.static(__dirname + '/bin'));
app.use('/src/data', express.static(__dirname + '/src/data'));
app.use('/src/images', express.static(__dirname + '/src/images'));
app.use('/src/stylesheets', express.static(__dirname + '/src/stylesheets'));




app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(80);
