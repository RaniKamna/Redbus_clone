const express = require('express');
const router = express.Router();

const Passenger = require("../models/passenger.model");

router.get("/", async (req, res) => {
    let item = await Passenger.find().lean().exec();
    return res.status(200).send({ item });
})

router.get('/:id', async (req, res) => {
    let item = await Passenger.findById(req.params.id).lean().exec();
    return res.status(200).send({ item });
})

router.post("/", async (req, res) => {
    let item = await Passenger.create(req.body);
    return res.status(201).send({ item });
})

module.exports = router;