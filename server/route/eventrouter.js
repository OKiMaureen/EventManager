// Import express library
import express from "express";

//Instantiate express library
const eventrouter = express.Router();

// path to allevents
eventrouter.route('/')

//get all events
.get()