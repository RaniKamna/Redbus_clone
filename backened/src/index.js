const express = require("express");

const app = express();
app.use(express.json());




const carController  = require("./controllers/car.controller");
const busController = require("./controllers/bus.controller");
const tempoController = require("./controllers/tempo.controller");
const orderController = require("./controllers/order.controller");


app.use("/car", carController);
app.use("/bus", busController);
app.use("/tempo", tempoController);
app.use("/order", orderController);





module.exports =   app;