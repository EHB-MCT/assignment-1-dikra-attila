// Middleware function that logs each request made to the server
module.exports = (req, res, next) => {
	console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
	next(); // Proceed to the next middleware or route handler
};
