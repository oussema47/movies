const express = require("express");
const connectDb = require("./config/connectDb");
const AuthRoute = require("./routes/auth");

require("dotenv").config();
const MovieRoutes = require("./routes/movie");
const app = express();
connectDb();

app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/movies", MovieRoutes);

app.listen(process.env.port, () =>
    console.log(`server is running onport ${process.env.port}`)
);