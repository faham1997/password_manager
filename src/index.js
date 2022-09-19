require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const exampleRoute = require("./routes/example.routes");

const db = require("./config/db");
db();

app.use(express.json());

//Use Routes
app.use("/api/v1/example", exampleRoute);

app.get("/", (req, res) => {
  res.json("Server is running successfully!");
});

app.listen(PORT, console.log("Server started on port: " + PORT));
