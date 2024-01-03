const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
const holidayRoute = require("./routes/holidayRoute");
require("dotenv").config();

app.use(cors());

mongoose.connect(process.env.CONNECTION_MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use("/publicHoliday", holidayRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
