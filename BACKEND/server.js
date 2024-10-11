require("dotenv").config();
const express = require("express");
const app = require("./src/app");
const PORT = process.env.PORT || 3000;

app.use(express.json());

//GET route (placeholder)
app.get("/api/resource", (req, res) => {
	res.json({ message: "GET request to /api/resource", status: "success" });
});

app.post("/api/resource", (req, res) => {
	const newResource = req.body; // Expect some data in the request body
	res.status(201).json({ message: "POST request to /api/resource", data: newResource });
});

// PUT route (placeholder)
app.put("/api/resource/:id", (req, res) => {
	const { id } = req.params; // Extract ID from URL parameter
	const updatedData = req.body; // Expect updated data in the request body
	res.json({ message: `PUT request to /api/resource/${id}`, updatedData });
});

// DELETE route (placeholder)
app.delete("/api/resource/:id", (req, res) => {
	const { id } = req.params; // Extract ID from URL parameter
	res.json({ message: `DELETE request to /api/resource/${id}`, status: "deleted" });
});

// PATCH route (placeholder)
app.patch("/api/resource/:id", (req, res) => {
	const { id } = req.params; // Extract ID from URL parameter
	const partialUpdate = req.body; // Expect partial data to update
	res.json({ message: `PATCH request to /api/resource/${id}`, updatedFields: partialUpdate });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
