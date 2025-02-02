const userModel = require('../models/userModels');
//import { message } from 'antd';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register callback
const registerController = async(req, res) => {
    try {
       const exisitingUser = await userModel.findOne({email:req.body.email });
       if (exisitingUser) {
        return res
        .status(200)
        .send({message:'User Already Exist', success:false})
       }
       const password = req.body.password;
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password,salt);
       req.body.password = hashedPassword;
       const newUser = new userModel(req.body);
       await newUser.save();
       res.status(201).send({message:"Register Successfully", success: true }); 
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send({
            success:false, 
            message: 'Register Controller ${error.message}'})
    }

};


//login callback
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(200)
                .send({ message: `User not found`, success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: `Invalid Email or password`, success: false });
        }
        
        res.status(200).send({ message: `Login Success`, success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Error in login CTRL ${error.message}` });
    }
};


const authController = async(req,res) => {
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        if(!user){
            return res.status(200).send({
                message:'User Not Found',
                success:false
            })
        }
        else{
            res.status(200).send({
                success:true,
                data:{
                    name: user.name,
                    email: user.email,
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "auth error",
            success:false,
            error
        })
    };
};

module.exports = {loginController, registerController , authController};
