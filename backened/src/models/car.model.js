const express = require("express");

const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name : {type : String, required : true},
    model : {type : String}, 
    total_seat: {type : Number, required : true},
    starting_price : {type : String, required : true},
    city : {type : String, required : true},
    driver_bata : {type : Number, required : true},
    local_package_start : {type : String, required : true},
    feature : [{type : String, required : true}],
    image : {type : String, required : true},
    available : {type : String},
    per_km : {type : Number, required : true}

});

const Car = mongoose.model("car", carSchema);

module.exports = Car;