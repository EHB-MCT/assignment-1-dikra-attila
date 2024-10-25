// Helper function to format API responses in a consistent structure
exports.formatResponse = (status, message, data = null) => {
	return { status, message, data }; // Return response in a standard format
};
