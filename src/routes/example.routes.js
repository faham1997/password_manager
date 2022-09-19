const express = require("express");
const router = express.Router();

const {
  createExample,
  getExamples,
} = require("../controllers/example.controller");

router.post("/", createExample);
router.get("/get-examples", getExamples);

module.exports = router;
