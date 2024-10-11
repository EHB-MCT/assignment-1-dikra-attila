require("dotenv").config();
const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const connectDataBase = require("./src/db");

connectDataBase();

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
