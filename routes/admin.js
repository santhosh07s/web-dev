const {Router} = require("express")
const adminrouters = Router();
const { adminModel } = require("../db")



adminrouters.get("/signup", (req,res) =>{
    res.json({
        message:"hello world"
    })
        
    })
    
adminrouters.post("/signin", (req,res) =>{

    })
    
adminrouters.post("/createcourse", (req,res) =>{

    })
module.exports = adminrouters;