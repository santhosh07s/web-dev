const express = require("express");
const userroutes = require("./routes/users");
const courseroutes = require("./routes/course");
const adminroutes = require("./routes/admin");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/api/user", userroutes);
app.use("/api/course" , courseroutes);
app.use("/api/admin" , adminroutes);

app.listen(3000);

