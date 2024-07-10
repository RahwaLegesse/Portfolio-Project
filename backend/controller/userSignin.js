const userModule = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

async function userSigninController (req, res){
    
    try{
        const {email, password} = req.body
    if(!email){
        throw new Error("please provide email")
    }
    if(!password){
        throw new Error("please provide password")
    }

    const user = await userModule.findOne({email})
    if(!user){
        throw new Error("user account not found")
    }
    const checkPassword = bcrypt.compare(password, user.password)
    console.log("check passwor",checkPassword)

    if(checkPassword){
        const datatoken={
            _id:user._id,
            email:user.email
        }
        const token = jwt.sign(datatoken, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });
        const option={
            httpOnly:true,
            secure:true
        }
        res.cookie("token",token,option).status(200).json({
            message:"successfully login",
            data:token,
            success:true,
            error:false
        })
    
    }else{
        throw new Error("incorrect password")
    }



    }catch(err){
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}
module.exports =userSigninController