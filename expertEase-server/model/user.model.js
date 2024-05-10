import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'Please provide your First Name']
    },
    lastName:{
        type:String,
        required:[true,'Please provide your Last Name']
    },
    phone:{
        type:String,
        required:[true,'Please provide your  Phone number'],
        unique:true
    },
    email:{
        type:String,
        required:[true,'Please provide your Email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please provide your Password']
    },

})

const User=mongoose.model('userCollection',userSchema);
export default User;