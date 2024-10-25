// Import required modules
const express = require("express");
const config = require("./config/config"); // Load configuration settings
const apiRoutes = require("./routes/apiRoutes"); // Import API route definitions
const logger = require("./middleware/logger"); // Custom middleware for logging requests
const errorMiddleware = require("./middleware/errorMiddleware"); // Middleware for handling errors

const app = express(); // Create an Express application instance

// Use built-in middleware to parse JSON request bodies
app.use(express.json());

// Use custom middleware to log incoming requests
app.use(logger);

// Set up the API routes under the "/api" prefix
app.use("/api", apiRoutes);

// Error handling middleware, which will catch any unhandled errors
app.use(errorMiddleware);

// Start the server on the configured port, logging the port number
app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
