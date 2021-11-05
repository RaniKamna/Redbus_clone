const express = require('express');
const router = express.Router();


const Order = require("../models/order.model");

router.get("/", async (req, res) => {
    let item = await Order.find().lean().exec();


    return res.status(200).send({item});
})

router.post("/", async(req, res) => {
    let item = await Order.create(req.body);

    return res.status(201).send({item});
})

module.exports = router;