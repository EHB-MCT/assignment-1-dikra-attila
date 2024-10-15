//Load veriables from .env file
require("dotenv").config();

//Import necessary modules
const express = require("express");
const cors = require("cors");
const app = express();

//uncomment this if you want to connect to mongodb
//const { MongoClient } = require("mongodb");
//const client = new MongoClient(process.env.FINAL_URL);

//set the port to either the port in .env or default to 3000
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

//root
app.get("/", (req, res) => {
	res.status(200).send("Welcome to the root");
});

//GET route (placeholder)
app.get("/api/get", (req, res) => {
	res.status(200).send("placeholder for get route");
});

//POST route (placeholder)
app.post("/api/post", (req, res) => {
	res.status(200).send("placeholder for post route");
});

// PUT route (placeholder)
app.put("/api/put", (req, res) => {
	res.status(200).send("placeholder for put route");
});

// DELETE route (placeholder)
app.delete("/api/delete", (req, res) => {
	res.status(200).send("placeholder for delete route");
});

// PATCH route (placeholder)
app.patch("/api/patch", (req, res) => {
	res.status(200).send("placeholder for patch route");
});

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
