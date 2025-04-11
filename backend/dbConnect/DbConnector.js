const { default: mongoose } = require("mongoose");
require("dotenv").config();

async function DbConnector(){
    // await mongoose.connect(process.env.MONGO_URL)
    // .then(()=>{console.log("MongoDb is connected successfully")})
    // .catch((err)=>{console.log(`Error in connecting with mongodb error=> ${err}`)})
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb is connected successfully");
        
    }
    catch(err){
        console.log(`Error in connecting with mongodb error=> ${err}`);
        
    }
}

module.exports = DbConnector;