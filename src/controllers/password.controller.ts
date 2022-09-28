import { Request, Response } from "express";
import { Password } from "../models/password.model";
import { encryptPassword, decryptPassword } from "../middlewares/password";

// Create a new example
export const createPassword = async (req: Request, res: Response) => {
  const { site, password, email } = req.body;
  if (!site || !password || !email)
    return res.status(400).json({
      status: "error",
      error: "Please provide all the details",
    });

  try {
    const hashedPassword = await encryptPassword(req.body.password);
    const newExample = Password.create({
      site,
      epassword: hashedPassword,
      email,
    });
    return res
      .status(200)
      .json({ status: "ok", error: "Added password successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "error", error: "Unable to save a new password" });
  }
};

//Get password by id
export const getPassword = async (req: Request, res: Response) => {
  const id = req.body.id;
  try {
    const siteID = await Password.findById(id);
    const hashedPassword = decryptPassword(siteID.epassword);
    return res.status(200).json({ status: "ok", siteID });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "error", error: "No password found" });
  }
};
