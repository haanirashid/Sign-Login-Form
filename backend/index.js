//requires
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const signRouter = require("./Routing/Signin.js");
const logRouter = require("./Routing/Login.js");
const cors = require("cors");
const path = require('path');
const DbConnector = require("./dbConnect/DbConnector.js");
//importing PORT from dotenv
const PORT = process.env.PORT;


// middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

//mongodb connection
DbConnector();

//Routing
app.use('/signin', signRouter );
app.use("/login", logRouter);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../vite-mongodb/dist")));

//get request
app.get("/",(req,res)=>{
    res.status(200).json({message:"Successfull Get Request"});
    // sendResponse(res,200,null,false,"Successfull Get Request");
})

app.listen(PORT, ()=>{console.log(`server is running on PORT ${PORT}`)});