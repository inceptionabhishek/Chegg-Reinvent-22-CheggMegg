const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: ".env" });
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 2000;
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/user", require("./routes/user"));
app.use("/assessment", require("./routes/assessment"));
app.use("/chats", require("./routes/chat"));
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
