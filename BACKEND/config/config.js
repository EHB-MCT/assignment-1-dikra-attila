// Load environment variables from a .env file
require("dotenv").config();

// Configuration object, where settings like the server's port are defined
const config = {
	port: process.env.PORT || 3000, // Use port from .env or default to 3000
};

module.exports = config; // Export configuration for use in other files
