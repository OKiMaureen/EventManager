//Importing express
import express from "express";

//Importing  database: data
import eventRoute from './controller/eventRouter' ;

//Importing database
import centerRoute from './controller/centerRouter' ;


// Requiring bodyparser
import bodyParser from 'body-parser';

//Instatiating router
const router = express.Router();



//Instantiating express
const app = new express();

// Registering middlewear bodyparser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

//Directs routre to event database
app.use(router.use('/api/v1/events', eventRoute ))

//Directs route to center databsae
app.use(router.use('/api/v1/centers', centerRoute ))




//Starting up the server
app.listen(3000, () => {
console.log('server running');

});