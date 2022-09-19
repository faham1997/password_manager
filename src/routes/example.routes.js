const express = require("express");
const router = express.Router();

const { createExample } = require("../controllers/example.controller");

router.post("/", createExample);

module.exports = router;
