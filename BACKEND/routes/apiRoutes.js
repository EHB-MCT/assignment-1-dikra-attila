const express = require("express"); // Import Express to create routes
const { getData } = require("../controllers/getController"); // Import controller for GET
const { createData } = require("../controllers/postController"); // Import controller for POST
const { updateData } = require("../controllers/putController"); // Import controller for PUT
const { deleteData } = require("../controllers/deleteController"); // Import controller for DELETE
const { partialUpdateData } = require("../controllers/patchController"); // Import controller for PATCH

const router = express.Router(); // Create a router instance

// Define each route and link it to the appropriate controller function
router.get("/data", getData); // GET request to fetch data
router.post("/data", createData); // POST request to create data
router.put("/data/:id", updateData); // PUT request to update data by ID
router.delete("/data/:id", deleteData); // DELETE request to remove data by ID
router.patch("/data/:id", partialUpdateData); // PATCH request to partially update data by ID

module.exports = router; // Export the router to be used in index.js
