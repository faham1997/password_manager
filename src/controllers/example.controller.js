const Example = require("../models/example.model");

// Create a new example
const createExample = async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age)
    return res.json({
      status: "error",
      error: "Please provide both name and age",
    });

  try {
    const newExample = Example.create({
      name: req.body.name,
      age: req.body.age,
    });
    return res.json({ status: "ok", error: "Added user successfully" });
  } catch (error) {
    return res.json({ status: "error", error: "Unable to save a new user" });
  }
};

// Get all examples
const getExamples = async (req, res) => {
  try {
    const examples = await Example.find({});
    return res.json({ status: "ok", examples });
  } catch (error) {
    return res.json({ status: "error", error: "No users found" });
  }
};

//Delete an example
const deleteExample = async (req, res) => {
  const id = req.params.id;

  try {
    const exampleToDelete = await Example.findByIdAndRemove(id);
    if (!exampleToDelete)
      return res.json({ status: "error", error: "example not valid" });
  } catch (error) {
    return res.json({ status: "error", error: "Couldn't remove example" });
  }
  return res.json({ status: "ok", error: "Example deleted successfully!" });
};

//Update an example
const updateExample = async (req, res) => {
  id = req.params.id;
  Example.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, age: req.body.age },
    (error) => {
      if (error) {
        return res.json({ status: "error", error: "example not valid" });
      } else {
        return res.json({
          status: "ok",
          error: "Example Updated successfully!",
        });
      }
    }
  );
};

module.exports = { createExample, getExamples, deleteExample, updateExample };
