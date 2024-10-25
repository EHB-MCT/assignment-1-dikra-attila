const { formatResponse } = require("../utils/helper"); // Import helper to format responses

// Handler function for PUT requests to update an existing resource
exports.updateData = (req, res) => {
	const { id } = req.params; // Extract resource ID from the route parameters
	const updatedData = req.body; // Extract updated data from the request body
	// Send a formatted response confirming the update
	res.status(200).json(formatResponse(200, `PUT request successful for id: ${id}`, updatedData));
};
