const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    bus_name: { type: String, required: true },
    pick_up_time: { type: Number, required: true },
    duration: { type: Number, required: true },
    drop_time: { type: Number, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    seats_available: { type: Number, required: true },
    seat_type: { type: String },
    pickup_address: { type: String, required: true },
    drop_address: { type: String, required: true },
    passengers: [{ 
        name : {type : String},
        gender : {type : String},
        age : {type : Number},
        seat_no:{type:String}
     }],
     sleeper : {type : Boolean, required : true},
     ac : {type : Boolean, required : true},
     nonac : {type : Boolean, required : true},
    travel_name: {type : String, required : true}

})

const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;