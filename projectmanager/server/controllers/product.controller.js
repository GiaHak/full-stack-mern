const Product = require('../models/product.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
// CRUD COMMANDS
// create function
module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({results: newProduct})
        })
        .catch(err => res.json({message: "error while creating a product", err: err }))
}
// SHOW ONE PRODUCT
module.exports.findOneProduct= (req,res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => {
            res.json({results: oneProduct}) 
        })
        .catch(err => res.json({message: "error while finding one product", err: err }))
}

// FIND ALL PRoDUCTS
module.exports.findAllProduct = (req,res) => {
    Product.find()
        .then(allProduct =>{
            res.json({results: allProduct})
        })
        .catch(err => res.json({message: "error while finding all the products", err: err }))
}

// UPDATE PRODUCT
module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedProduct => {
            res.json({results: updatedProduct})
        })
        .catch(err => res.json({message: "error while updating  Product", err: err }))
}

// DELETE ProductS
module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params._id})
        .then(deletedProduct =>{
            res.json({results: deletedProduct})
        })
        .catch(err => res.json({message: "error while deleting a Products", err: err }))
}
