import express from "express";
const router = express.Router();

import {
  createPassword,
  getPassword,
} from "../controllers/password.controller";

router.post("/create-password", createPassword);
router.get("/get-password", getPassword);

export default router;
