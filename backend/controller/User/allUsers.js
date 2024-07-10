const userModule = require("../../models/userModel")


async function allUsers(req,res){
    try{
        console.log("userid all Users",req.userId)

        const allUsers = await userModule.find()
        
        res.json({
            message : "All User ",
            data : allUsers,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = allUsers