const mongoose= require('mongoose')

// creating  userschema
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },
    role: { type: String,
         required: true,
          default: 'user'
         }
})
const User= mongoose.model('User',userSchema);
module.exports =User


  