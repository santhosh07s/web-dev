const { Router }= require("express");
const userroutes = Router();
const{ userModel } = require("../db")


userroutes.get("/signup", (req, res) => {
   
});

userroutes.post("/signin", (req, res) => {
    
});

userroutes.post("/profile", (req, res) => {
    
});

userroutes.post("/preview", (req, res) => {
   
});

module.exports = {
    userroutes : userroutes
}
