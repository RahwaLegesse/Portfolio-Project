const bcrypt = require('bcryptjs');
const userModule = require('../../models/userModel');


async function userSignupController(req, res){
    try{
        const {email, password, name} =req.body
        console.log("hello",req.body)
        const user = await userModule.findOne({email})
        if(user){
            throw new Error("user account already exist")
        }
        if(!email){
            throw new error("please provide email")
        }
        if(!password){
            throw new error("please provide password")
        }
        if(!name){
            throw new error("please provide name")
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);

        if(!hash){
            throw new error("something is wrong")
        }
        const payload = {
            ...req.body,
            role:"General",
            password:hash
        }
        const userData = new userModule(payload)
        const saveUser = await userData.save()
        res.status(201).json({
            data:saveUser,
            success:true,
            error:false,
            message:"user account created successfully!"
        })


    }catch(err){
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports = userSignupController