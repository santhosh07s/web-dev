const {Schema, default: mongoose} = require("mongoose")
const ObjectID = Schema.ObjectId;
mongoose.connect("mongodb+srv://santhosh:<123>@cluster0.olks6.mongodb.net/courseera_app")

const userschema =new Schema({
    name:String,
    email:String,
    password:String
});

const adminschema = new Schema({
    name:String,
    email:String,
    password:String
});

const courseschema = new Schema({
    name:String,
    desc:String,
    price:Number,
    Imageurl:String,
    creatorid:ObjectID
});
const purchaseschema = new Schema({
    courseid:ObjectID,
    userid:ObjectID
    
})
const userModel = mongoose.model("users", userschema);
const adminModel = mongoose.model("admin", adminschema);
const courseModel = mongoose.model("course", courseschema);
const purchaseModel = mongoose.model("purchase",purchaseschema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}



