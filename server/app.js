const express = require('express');
const data = require('./model/database.js');

// requiring bodyparser
const bodyParser = require('body-parser');

//instantiating express
const app = new express();

// registering middlewear bodyparser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


// route to get all centers : get route
app.get('/api/v1/centers', (req, res) => {

	res.send({ centers: data.centers });

});

//route to add a new center : post route
app.post('/api/v1/centers', (req, res) => {
	
	data.centers.push({
	id: data.centers.length + 1,
	name: req.body.name,
	address: req.body.address,
	cost: req.body.cost,
	capacity: req.body.capacity,
	facilities: req.body.facilities
	
		});
res.send({  centers: data.centers });
	
});
//starting up the server
app.listen(3000, () => {
console.log('server running');

});