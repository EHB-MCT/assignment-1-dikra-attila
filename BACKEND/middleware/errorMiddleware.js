// Middleware function to catch and handle errors
module.exports = (err, req, res, next) => {
	console.error(err.stack); // Log the error stack trace
	res.status(500).json({ error: "An error occurred, please try again later." }); // Send generic error message
};
