const express = require('express');
const router = express.Router();

const Booking = require("../models/booking.model");

router.get("/data", async (req, res) => {
    let item = await Booking.find().lean().exec();
  
    return res.status(200).send({ item });
});

router.get('/:id', async (req, res) => {
    let item = await Booking.findById(req.params.id).lean().exec();
    return res.status(200).send({ item });
});

router.post("/", async (req, res) => {
    let item = await Booking.create(req.body);
    return res.status(201).send({item});
});

router.patch("/update/:id", async (req, res) => {
    let item = await Booking.findByIdAndUpdate(req.params.id, req.body, {new : true});
    return res.status(200).send({item})
})

module.exports = router;