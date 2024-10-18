const express = require("express");
const {userroutes} = require("./routes/users")
const {courseroutes} = require("./routes/course")

const app = express();

app.use("/user", userroutes);
app.use("/course" , courseroutes);

app.listen(3000);