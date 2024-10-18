
const express = require("express");
const {Router} = require("express");
const userroutes = Router();

userroutes.use(express.json());

    userroutes.get("/signup", (req,res) =>{
        res.json({
            message:"hello world"
        })
            
        })
        
    userroutes.post("/signin", (req,res) =>{

        })
        
    userroutes.post("/profile", (req,res) =>{

        })
    
module.exports = {
    userroutes: userroutes
}