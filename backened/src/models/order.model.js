const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    phone_number : {type : Number, required : true},
    name : {type : String, required : true}, 
    email : {type : String, required : true}, 
    total_price : {type : Number, required : true},
    total_passenger : {type : Number, required : true},
    distance : {type : Number, required : true},
    duration : {type : Number, required : true},
    vehicle_id : {type : String, required : true},
    vehicle_name : {type : String, required : true},
    pick_up_address : {type : String, required : true},
    destination_address : {type : String, required : true},
    departure_date : {type : String, required : true},
    return_date : {type : String, required : true}

});


const Order = mongoose.model("order", orderSchema);

module.exports = Order;