const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    bus_name: { type: String, required: true },
    pick_up_time: { type: String, required: true },
    duration: { type: String, required: true },
    drop_time: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    seats_available: { type: Number, required: true },
    seat_type: { type: String },
    pickup_address: { type: String, required: true },
    drop_address: { type: String, required: true },
    passengers: [{ type: String, required: true }],

})

const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;