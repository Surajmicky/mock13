const User=require('../models/user.model');
const express= require('express');
const bcrypt = require('bcrypt');

const registerRouter= express.Router();

registerRouter.post('/register',async(req,res)=>{
  
    const alreadyExists= await User.findOne({email:req.body.email});
    if(alreadyExists){
        return res.json({message:'Email already exists'})
    } 
    let {email,password,name}= req.body;
    let role= 'user'
    if(email.includes('@masaischool.com')){
     role= 'admin'
    }
   const hashedPassword=  bcrypt.hashSync(password, 10);
    const user= await User.create({name:name,email:email,password:hashedPassword,role});
    return res.status(201).send({message:'User created successfully'})
})
module.exports= registerRouter;