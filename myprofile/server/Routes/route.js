const express=require('express')
const router=new express.Router();
const users=require('../model/userSchema');
const nodemailer=require('nodemailer');
//email config
const transporter=nodemailer.createTransport({
  service:'gmail',
  auth:{
user:process.env.EMAIL,
pass:process.env.PASS
  }
})
//register auser ditals
router.post('/register',async(req,res)=>{
 // const {Fname,Lname,Email,mobile,message}=req.body;
 console.log(req.body)
})

module.exports=router;