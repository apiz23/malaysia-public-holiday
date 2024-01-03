const express = require("express");
const holidaysController = require("../controllers/holidayController");

const router = express.Router();

// router.get("/", (req, res) => {
// 	res.send("Hai");
// });

router.get("/", holidaysController.getAllHolidays);
router.get("/:state?", holidaysController.getHolidaysByState);
router.post("/malaysia/addData", holidaysController.addData);

module.exports = router;
