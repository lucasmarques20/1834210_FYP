const mongoose = require ("mongoose")

const UserInfoSchema = new mongoose.Schema(
    {
        email:{type:String, required:true, unique:true},
        password:{type: String, required: true},
        Admin: {type: Boolean, default: false}, // So when a user is created it is not Admin
    }, {timestamps: true} // gives time of creation 

)

module.exports = mongoose.model("UserInfo", UserInfoSchema);