//requires
const express = require("express");
const Router = express.Router();
const sendResponse = require("../Helper/sendResponse.js");
const Student = require("../Models/Students");
const MiddlewareFunc = require("../Middleware/MiddlewareFunc.js");
const PasswordHash = require("../Middleware/PasswordHash.js");


//post Request
Router.post("/", MiddlewareFunc ,  PasswordHash , async(req,res)=>{

    // destructing of values from request.body
    const {Uname,Fname,mail,pass,agee,gen,Phnumber} = req.body;

    //saving values in Schema
    let newStudent = new Student({
        userName : Uname,
        fatherName : Fname,
        email : mail,
        password : pass,
        age : agee,
        gender : gen,
        phoneNumber : Phnumber
    })

    //creating new Student Object in mongodb
    newStudent = await newStudent.save();

    //sendResponse
    sendResponse(res,201,newStudent,false,"user Added Successfully");
})

module.exports = Router;