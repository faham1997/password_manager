const express = require("express");
const router = express.Router();

const {
  createExample,
  getExamples,
  deleteExample,
} = require("../controllers/example.controller");

router.post("/", createExample);
router.get("/get-examples", getExamples);
router.delete("/delete/:id", deleteExample);
module.exports = router;
