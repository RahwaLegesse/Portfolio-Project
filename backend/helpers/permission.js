const userModule = require("../models/userModel")

const uploadProductPermission = async(userId) => {
    const user = await userModule.findById(userId)

    if(user.role === 'ADMIN'){
        return true
    }

    return false
}


module.exports = uploadProductPermission