const Author = require('../models/author.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
// CRUD COMMANDS
// create function
module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json({results: newAuthor})
        })
        .catch(err => res.json({message: "error while creating the author", err: err }))
}
// SHOW ONE 
module.exports.findOneAuthor= (req,res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => {
            res.json({results: oneAuthor}) 
        })
        .catch(err => res.json({message: "error while finding one Author", err: err }))
}

// FIND ALL AuthorS
module.exports.findAllAuthor = (req,res) => {
    Author.find()
        .then(allAuthor =>{
            res.json({results: allAuthor})
        })
        .catch(err => res.json({message: "error while finding all the Authors", err: err }))
}

// UPDATE Author
module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedAuthor => {
            res.json({results: updatedAuthor})
        })
        .catch(err => res.json({message: "error while updating  Author", err: err }))
}

// DELETE AuthorS
module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id: req.params._id})
        .then(deletedAuthor =>{
            res.json({results: deletedAuthor})
        })
        .catch(err => res.json({message: "error while deleting a Authors", err: err }))
}