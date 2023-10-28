const express = require("express");
const userModel = require("./mongo");
const bodyparser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 5000;




app.post("/login",async(req,res)=>{

    try{
        const check=await userModel.findOne({email: req.body.email})
    

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/register",async(req,res)=>{
    console.log(req);
    // const{username,phonenumber,email,password}=req.body

    // const data={
    //     username: username,
    //     phonenumber:phonenumber,
    //     email:email,
    //     password:password
    // }

    try{
        const user = new userModel(req.body);
        let result = await user.save();
        result = result.toObject();
        if(result){
            delete result.password;
            res.send(req.body);
            console.log(result);
        }else{
            console.log("user already register");
        }
    }catch{
        res.send("something went wrong");
    }

})

app.listen(5000,()=>{
    console.log("port connected");
})