const bcrypt = require("bcrypt");
const saltRounds = 10;

//Hashing password before saving it on Mongodb
async function PasswordhHash (req,res,next){
    try {
        const {pass } = req.body;
        if (!pass) {
            return sendResponse(res, 400, null, true, "Password is required");
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hashPass = await bcrypt.hash(pass, salt);
        console.log(`hashedpassword=>${hashPass}`)
        req.body.pass = hashPass; // Store hashed password in req.body
        next(); // Proceed to the next middleware
    } catch (err) {
        console.error("Hashing error:", err);
        return sendResponse(res, 500, null, true, "Internal Server Error");
    }
}

module.exports = PasswordhHash;