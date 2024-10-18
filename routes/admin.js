const {Router} = require("express")
const adminrouter = Router();


adminrouter.get("/signup", (req,res) =>{
    res.json({
        message:"hello world"
    })
        
    })
    
adminrouter.post("/signin", (req,res) =>{

    })
    
adminrouter.post("/createcourse", (req,res) =>{

    })
module.exports = {

    adminrouter : adminrouter

}