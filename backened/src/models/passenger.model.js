const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
    seat : {type : Number, required : true},
    name : {type : String, required : true},
    gender : {type : String, required : true},
    age : {type : String, required : true},
    email : {type : Number, required : true},
    phoneno : {type : String, required : true},
});


const Passenger = mongoose.model("passenger", passengerSchema);
module.exports = Passenger;