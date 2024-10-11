const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

const connectDataBase = async () => {
	try {
		await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection failed:", error.message);
		process.exit(1); // Exit process with failure
	}
};

module.exports = connectDataBase;
