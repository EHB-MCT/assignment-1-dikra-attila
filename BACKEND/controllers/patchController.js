const { formatResponse } = require("../utils/helper"); // Import helper to format responses

// Handler function for PATCH requests to partially update a resource
exports.partialUpdateData = (req, res) => {
	const { id } = req.params; // Extract resource ID from the route parameters
	const partialData = req.body; // Extract partial data from the request body
	// Send a formatted response confirming the partial update
	res.status(200).json(formatResponse(200, `PATCH request successful for id: ${id}`, partialData));
};
