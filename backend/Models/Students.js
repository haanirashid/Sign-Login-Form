const mongoose = require("mongoose");
const {Schema} = mongoose;

const studentSchema = new Schema({
    userName : {type : String},
    faherName : {type : String},
    email : {type : String},
    password : {type : String},
    gender : {type :String},
    age : {type: Number},
    phoneNumber : {type : Number}
},
{timestamps:true}
);

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;