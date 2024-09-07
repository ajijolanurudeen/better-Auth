
const mongoose = require("mongoose");
const jwt =require("jsonwebtoken")
const joi = require("joi")
const passwordComplexity = require("joi-password-complexity")

    const userSchema = new mongoose.Schema({
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
    });
//userSchema.methods.generateAuthToken = function(){
//    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:JWTLIFETIME}
//    )
  //  return token
//}
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user",userSchema)

const validate = (data)=>{
    const Schema = joi.object({
        firstName:joi.string().required().label("first Name"),
        lastName:joi.string().required().label("last Name"),
        email:joi.string().required().label("email"),
        password:passwordComplexity().required().label("password"),
    });
    return Schema.validate(data)
};

module.exports = {User,validate}
