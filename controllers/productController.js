const Product = require("../models/Product");

// Get all products
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// Add product
exports.addProduct = async (req, res) => {
    console.log(req.body);

    const product = new Product(req.body);

    await product.save();

    res.json({
        message: "Product Added Successfully"
    });
};