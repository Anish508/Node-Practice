require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db.js");
const userRoute = require("./routes/user-routes.js");
const homeRoute = require("./routes/home-route.js");

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", userRoute);
app.use("/api/home", homeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is now listening on port:", PORT);
});
