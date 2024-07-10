const userModule = require("../models/userModel")

async function userDetailsController(req,res){
    try{
        console.log("userid",req.userId)
        const user = await userModule.findById(req.userId)
        console.log("user",user)

        res.status(200).json({
            data:user,
            error:false,
            success:true,
            message:"user Details"
        })
        

    }catch(err){
        res.status(400).json({
            message:err.message || err,
            error :true,
            success : false
        })
    }
}
module.exports = userDetailsController