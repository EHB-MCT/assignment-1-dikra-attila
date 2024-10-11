exports.healthCheck = (req, res) => {
	res.json({ status: "API is running", time: new Date().toISOString() });
};
