// server.js

const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./mongo");
const bodyparser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/sdp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const check = await userModel.findOne({ email: req.body.email });

    if (check) {
      if (req.body.password === check.password) {
        console.log("Correct password");
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(400).json({ error: "Incorrect Password" });
      }
    } else {
      res.status(401).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    console.log("Error in login route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register route
app.post("/register", async (req, res) => {
  try {
    const user = new userModel(req.body);
    let result = await user.save();
    result = result.toObject();

    if (result) {
      delete result.password;
      res.json(result);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (error) {
    console.log("Error in register route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.js

const nodemailer = require('nodemailer');


//const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'nishitaamara@gmail.com',
        pass: 'pqze fvtf ezah ceir',
    },
});

app.post("/send-otp-email", async (req, res) => {
    const email = req.body.email;
    const otp = generateOtp(); // You can define the generateOtp function
    console.log(otp);

    const mailOptions = {
        from: 'nishitaamara@gmail.com',
        to: email,
        subject: 'OTP',
        text: `Your OTP is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`OTP email sent successfully to ${email}`);
        });

        res.status(200).json({
            message: 'OTP email sent successfully.',
        });
    } catch (err) {
        console.error('Error sending OTP:', err);
        res.status(404).json({ success: false, message: 'Error sending OTP failed' });
    }
});

const portt = 4000;
app.listen(portt, () => {
    console.log(`Server is running on port ${portt}`);
});
