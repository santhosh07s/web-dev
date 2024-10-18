const express = require("express");
const { Router } = require("express");
const userroutes = Router();
const{ userModel } = require("../db")

userroutes.use(express.json());

userroutes.get("/signup", (req, res) => {
   
});

userroutes.post("/signin", (req, res) => {
    
});

userroutes.post("/profile", (req, res) => {
    
});

userroutes.post("/preview", (req, res) => {
   
});

module.exports = userroutes;
