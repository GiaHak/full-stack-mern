const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must be at least 4 characters"]
    },
    price:{
        type: Number,
        required: [true, "Number of products is required!"]
    },
    description:{
        type: String,
        required: [true, "Description field is required!"]
    }
});
// final setup
const Product = mongoose.model("Product", ProductSchema);

// need to export this model to use it in our project
module.exports =Product;
