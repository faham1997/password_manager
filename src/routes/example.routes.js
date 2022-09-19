const express = require("express");
const router = express.Router();

const {
  createExample,
  getExamples,
  deleteExample,
  updateExample,
} = require("../controllers/example.controller");

router.post("/", createExample);
router.get("/get-examples", getExamples);
router.delete("/delete/:id", deleteExample);
router.put("/update/:id", updateExample);
module.exports = router;
