const ProductController = require('../controllers/product.controller');

module.exports = app => {


// CREATE
    app.post("/api/product/create", ProductController.createProduct);

    // FIND ONE 
    app.get("/api/product/:_id", ProductController.findOneProduct);

    // FIND ALL
    app.get("/api/products", ProductController.findAllProduct);

    // UPDATE 
    app.put("/api/product/update/:_id", ProductController.updateProduct);

    // DELETE
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct);
}