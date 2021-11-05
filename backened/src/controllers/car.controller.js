const express = require("express");
const router = express.Router();

const Car = require("../models/car.model");

//post vehicle 

router.post("/", async (req, res) => {
    let item = await Car.create(req.body);

    return res.status(201).send({item});
})


router.get("/all", async (req, res) => {
    let item = await Car.find().lean().exec();


    return res.status(200).send({item})
})
router.patch("/update/:id", async (req, res) => {
    let item = await Car.findByIdAndUpdate(req.params.id, req.body, {new : true});

    return res.status(201).send({item});
})


//findbyid 


router.get("/one/:id", async (req, res) => {
    let item = await Car.findById(req.params.id).lean().exec();

    return res.status(200).send({item});
})

module.exports = router;