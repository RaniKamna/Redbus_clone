const express = require("express");
const router = express.Router();

const Bus = require("../models/bus.model");

//post vehicle 

router.post("/", async (req, res) => {
    let item = await Bus.create(req.body);

    return res.status(201).send({item});
})


router.get("/all", async (req, res) => {
    let item = await Bus.find().lean().exec();


    return res.status(200).send({item})
})

router.patch("/update/:id", async (req, res) => {
    let item = await Bus.findByIdAndUpdate(req.params.id, req.body, {new : true});

    return res.status(201).send({item});
})



//findbyid 


router.get("/one/:id", async (req, res) => {
    let item = await Bus.findById(req.params.id).lean().exec();

    return res.status(200).send({item});
})




module.exports = router;