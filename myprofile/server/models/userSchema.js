const mongoose=require('mongoose')
const validator=require(validator);
const userSchema=new mongoose.Schema({
  Fname:{
    type:String,
    require:true,
    trim:true
  },
  Lname:{
    type:string,
    require:true,
    trim:true
  },
  Email:{
type:string,
require:true,
unique:true,
validate(value){
  if(!validator.isEmail(value)){
    throw new Error('email is invalid');
  }
}
  },
  Phone:{
    type:string,
     requier:true
  },
  messages:[]
})
//create model
const users=new mongoose.model('users',userSchema);
module.exports=users;