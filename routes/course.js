const {Router} = require("express")
const courseroutes = Router();
const {courseModel} = require("../db")

courseroutes.get("/preview-course", (req,res) =>{

})
          
courseroutes.post("/my-course", (req,res) =>{
        
})

module.exports = {
    courseroutes : courseroutes
} 