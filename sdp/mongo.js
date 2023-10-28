const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/sdp");


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const users = mongoose.model("users",newSchema);
users.createIndexes();

module.exports=users