const mongoose = require('mongoose');

const AuthorSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required!"],
        minlength: [4, "name must be at least 4 characters"]
    }
})
// final setup
const Author = mongoose.model("Author", AuthorSchema);

// need to export this model to use it in our project
module.exports =Author;
