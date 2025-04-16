require("dotenv").config();
const express = require("express");
const Router = express.Router();
const sendResponse = require("../Helper/sendResponse.js");
const Student = require("../Models/Students");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Router.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return sendResponse(res, 404, null, true, "Enter Both Values");
    }

    try {
        let stud = await Student.findOne({ email });

        if (!stud) {
            return sendResponse(res, 403, null, true, "User not Found");
        }
        let passMatch = await bcrypt.compare(password, stud.password);

        if (!passMatch) {
            return sendResponse(res, 403, null, true, "Invaild Password");
        }
        // Generating token on Successfull login

        jwt.sign({ email: stud.email, userName: stud.userName }, process.env.PRIVATEKEY, function (err, token) {
            const logData = {
                userName: stud.userName,
                email: stud.email,
                token
            }
            sendResponse(res, 200, logData, false, "login Sucessfull")
        });

    }
    catch (err) {
        sendResponse(res, 500, null, true, "Login Not Successfull")
    }

})

module.exports = Router