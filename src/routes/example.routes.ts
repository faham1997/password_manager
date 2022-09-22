import express from "express";
const router = express.Router();

import {
  createExample,
  getExamples,
  deleteExample,
  updateExample,
} from "../controllers/example.controller";

router.post("/", createExample);
router.get("/get-examples", getExamples);
router.delete("/delete/:id", deleteExample);
router.put("/update/:id", updateExample);

export default router;
