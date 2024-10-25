const { formatResponse } = require("../utils/helper"); // Import helper to format responses

// Handler function for DELETE requests to remove a resource
exports.deleteData = (req, res) => {
	const { id } = req.params; // Extract resource ID from the route parameters
	// Send a formatted response confirming the deletion
	res.status(200).json(formatResponse(200, `DELETE request successful for id: ${id}`));
};
