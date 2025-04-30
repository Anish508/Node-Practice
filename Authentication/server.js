require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db.js");
const userRoute = require("./routes/user-routes.js");
const homeRoute = require("./routes/home-route.js");
const adminRoute = require("./routes/admin-route.js")
const uploadImageRoutes = require('./routes/image-routes.js')
connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", userRoute);
app.use("/api/home", homeRoute);
app.use("/api/admin", adminRoute);
app.use("/api/image", uploadImageRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is now listening on port:", PORT);
});
