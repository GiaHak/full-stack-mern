const express = require('express');
const cors = require('cors') // This is new
const mongoose = require("mongoose")

const app = express();
app.use(cors()) //this allows the express application (backend) to share information and resources with the front end(react app client)
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
const port = 8000;

app.get("/", (req, res) =>{
    res.json({msg: "hello authors"})
})
// require('./server/routes/author.routes')(app);

require('./server/config/mongoose.config'); 

require('./server/routes/author.routes')(app);




app.listen(port, () => console.log(`Listening on port: ${port}`) );
