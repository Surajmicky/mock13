const User = require('../models/user.model');
const express = require('express');
const loginRouter= express.Router()
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
loginRouter.post('/login',async(req,res)=>{
    const registeredUser = await User.findOne({ email: req.body.email });
    if (!registeredUser) {
      

      return res.json({message:'User not found'});
    }
    let {email,password}=req.body;
    const correctUser= bcrypt.compareSync(password, registeredUser.password);
    if(correctUser){
        const token = jwt.sign(
            { id: registeredUser.id, email: registeredUser.email },
            'mock12'
          );
        return  res.send({token:token,role:registeredUser.role})
    }else {
        res.send({message:"something went wrong"})
    }
    
})
module.exports= loginRouter;