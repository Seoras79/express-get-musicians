const express = require("express"); // import express
const app = express(); // calls the express function and stores return value in app variable
const {Musician} = require("./Musician") // import Musician model
const {sequelize} = require("./db"); // import sequelize instance
const { response } = require("express"); // import response
const nodemon = require("nodemon");

const port = 3000; // set port

//TODO

app.use(express.json())

app.get("/musicians/", async (req, res) => { // async function where the /musicians route (endpoint) is defined
    const musicians = await Musician.findAll; // findAll() is a sequelize method that returns all musicians in the db
    res.json(musicians); // sends the response as json data to the client (browser)
});

app.post("/musicians/", async (req, res) => {
    //update database with new musician
    const {name, instrument} = req.body;
    const musicians = await Musician.create({name, instrument});
    res.json(musicians);
})

app.put("/musicians/:id", async (req, res) => {
    // update existing musician in the db by id
    const {name, instrument} = req.body;
    const musicians = await Musician.update({name, instrument}, {where: {id: req.params.id}});
    res.json(restaurant);
})

app.delete("/musicians/:id", async (req, res) => {
    // delete musician from db
    const {name, instrument} = req.body;
    const musicians = await Musician.destroy({name, instrument}, {where: {id: req.params.id}});
    res.json(musicians)
})

app.listen(port, () => { // starts the server and listens on the port specified
    sequelize.sync(); // syncs the database with the models defined in the sequelize instance
    console.log(`Listening on port ${port}`) 
})