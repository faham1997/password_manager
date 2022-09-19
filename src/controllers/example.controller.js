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

// Get all Examples

module.exports = { createExample };
