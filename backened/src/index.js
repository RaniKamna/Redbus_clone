const express = require("express");

const app = express();
app.use(express.json());


const carController  = require("./controllers/car.controller");
const busController = require("./controllers/bus.controller");
const tempoController = require("./controllers/tempo.controller");
const orderController = require("./controllers/order.controller");
const bookingController = require('./controllers/booking.controller');
const passengerController = require('./controllers/passenger.controller');


app.use("/car", carController);
app.use("/bus", busController);
app.use("/tempo", tempoController);
app.use("/order", orderController);
app.use('/booking', bookingController);
app.use('/passenger', passengerController);


module.exports =   app;