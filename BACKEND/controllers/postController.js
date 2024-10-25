const { formatResponse } = require("../utils/helper"); // Import helper to format responses

// Handler function for POST requests to create data
exports.createData = (req, res) => {
	const newData = req.body; // Extract data from the request body (assumes JSON input)
	// Send a formatted response confirming the data creation
	res.status(201).json(formatResponse(201, "POST request successful", newData));
};
