import { Request, Response } from "express";
import { IExample, Example } from "../models/example.model";

// Create a new example
export const createExample = async (req: Request, res: Response) => {
  const { name, age } = req.body;
  if (!name || !age)
    return res.status(400).json({
      status: "error",
      error: "Please provide both name and age",
    });

  try {
    const newExample = Example.create({
      age,
      name,
    });
    return res.status(200).json({ status: "ok", error: "Added user successfully" });
  } catch (error) {
    return res.status(400).json({ status: "error", error: "Unable to save a new user" });
  }
};

// Get all examples
export const getExamples = async (req: Request, res: Response) => {
  try {
    const examples = await Example.find({});
    return res.status(200).json({ status: "ok", examples });
  } catch (error) {
    return res.status(400).json({ status: "error", error: "No users found" });
  }
};

//Delete an example
export const deleteExample = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const exampleToDelete = await Example.findByIdAndRemove(id);
    if (!exampleToDelete)
      return res.status(400).json({ status: "error", error: "example not valid" });
  } catch (error) {
    return res.status(400).json({ status: "error", error: "Couldn't remove example" });
  }
    const exampleToDelete = await Example.findByIdAndRemove(id);
  return res.status(200).json({ status: "ok", error: "Example deleted successfully!" });
};

//Update an example
export const updateExample = async (req: Request, res: Response) => {
  const id = req.params.id;
  Example.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, age: req.body.age },
    (error) => {
      if (error) {
        return res.status(400).json({ status: "error", error: "example not valid" });
      } else {
        return res.status(200).json({
          status: "ok",
          error: "Example Updated successfully!",
        });
      }
    }
  );
};
