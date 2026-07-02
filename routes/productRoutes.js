const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {

        console.log("BODY:", req.body);

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: err.message
        });

    }
});

module.exports = router;