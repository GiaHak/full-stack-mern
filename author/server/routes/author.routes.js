const AuthorController = require('../controllers/author.controller');

module.exports = app => {


// CREATE
    app.post("/api/author/create", AuthorController.createAuthor);

    // FIND ONE 
    app.get("/api/author/:_id", AuthorController.findOneAuthor);

    // FIND ALL
    app.get("/api/authors", AuthorController.findAllAuthor);

    // UPDATE 
    app.put("/api/author/update/:_id", AuthorController.updateAuthor);

    // DELETE
    app.delete("/api/author/delete/:_id", AuthorController.deleteAuthor);
}
