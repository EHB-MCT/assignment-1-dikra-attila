const { formatResponse } = require("../utils/helper"); // Import helper to format responses

// Handler function for GET requests to retrieve data
exports.getData = (req, res) => {
	// Sample data to be sent in the response
	const data = [
		{ id: 1, name: "Item 1" },
		{ id: 2, name: "Item 2" },
	];
	// Send a formatted response with a success message and data
	res.status(200).json(formatResponse(200, "GET request successful", data));
};
