const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/admin", require("./routes/Admin.js"));

//Students
app.use("/api/students", require("./routes/Student.js"));
//Tutor
app.use("/api/tutor", require("./routes/Tutor.js"));

// Question Database
app.use("/api/question", require("./routes/Askquestion.js"));

// Solved Questions
app.use("/api/solved", require("./routes/SolvedQuestionsRoutes.js"));

// new courses
app.use("/api/courses", require("./routes/courses.js"));
// Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
