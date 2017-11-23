//importing express library
import express from "express"

//importing  body-parser library
import bodyParser from  "body-parser"

// instatiating express library
const app =  express();

//confiure app to use json
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// open api server
app.listen(4002,()=>{
    console.log("my name");
})