const mongoose = require("mongoose");



const connect = () => {
    mongoose.connect("mongodb+srv://redbus:Redbus@cluster0.ome2c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = connect;