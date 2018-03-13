//Importing express
import express from "express";

// importing bodyparser
import bodyParser from 'body-parser';

// importring routes module
import routes from './routes';

//Instantiating express
const app = new express();

// Registering middlewear bodyparser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

//Starting up the server
app.listen(process.env.PORT || 3000, () => {
console.log('server running');
});