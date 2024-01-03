const Malaysia = require("../models/malaysia");

const getAllHolidays = async (req, res) => {
	try {
		const holidaysData = await Malaysia.find();
		res.json(holidaysData.map(({ name, dates }) => ({
			name,
			dates,
		})));
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const getHolidaysByState = async (req, res) => {
	const state = req.params.state;

	try {
		let stateHolidays = [];
		const nationalHolidays = await Malaysia.findOne({ name: "national" });
		if (!nationalHolidays) {
			res.status(404).json({ error: "No data found for national" });
			return;
		}

		stateHolidays = nationalHolidays.dates;

		if (state && state !== "national") {
			const stateSpecificHolidays = await Malaysia.findOne({ name: state });

			if (stateSpecificHolidays) {
				stateHolidays = stateHolidays.concat(stateSpecificHolidays.dates);
			} else {
				res.status(404).json({ error: `No data found for ${state}` });
				return;
			}
		}

		res.json(stateHolidays);
	} catch (error) {
		console.error("Error fetching holidays:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const addData = async (req, res) => {
	try {
		const { name, dates } = req.body;

		if (!name || !dates || !Array.isArray(dates)) {
			return res.status(400).json({ error: "Invalid request parameters" });
		}

		const newMalaysiaData = new Malaysia({ name, dates });

		await newMalaysiaData.save();

		res.status(201).json({ message: "Data added successfully" });
	} catch (error) {
		console.error("Error adding data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {
	getAllHolidays,
	getHolidaysByState,
	addData,
};
