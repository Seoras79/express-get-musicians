const express = require("express"); // import express
const app = express(); // calls the express function and stores return value in app variable
const {Musician} = require("./Musician") // import Musician model
const {sequelize} = require("./db"); // import sequelize instance
const { response } = require("express"); // import response

const port = 3000; // set port

//TODO

app.get("/musicians/:id", async (req, res) => { // async function where the /musicians route (endpoint) is defined
    const musicians = await Musician.findByPk(1); // findByPk() is a sequelize method that returns the musician with the id specified
    res.json(musicians); // sends the response as json data to the client (browser)
});



app.listen(port, () => { // starts the server and listens on the port specified
    sequelize.sync(); // syncs the database with the models defined in the sequelize instance
    console.log(`Listening on port ${port}`) 
})