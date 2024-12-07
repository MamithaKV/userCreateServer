
const users=require('../model/userModel')
const jwt =require('jsonwebtoken')

// register
exports.registerUser = async (req,res)=>{
    console.log("inside registerUser");
   const{firstName,lastName,email,password,phoneNumber}= req.body
   console.log(firstName,lastName,email,password,phoneNumber);
   try{
   const userExists = await users.findOne({email})
   if(userExists){
    res.status(406).json("user already exists please login...")
   }else{
    const newUser = new users({
       firstName,lastName,email,password,phoneNumber 
    })
   await newUser.save()
   res.status(200).json(newUser)
   }
   
   }catch(err){
    res.status(401).json(err)
}
   } 
  
//    login
exports.loginUser = async (req,res)=>{
    console.log("inside loginUser");
   const{email,password}=req.body
   console.log(email,password);
   
   try{
   const userExists = await users.findOne({email,password})
   if(userExists){
    // token
    const token =jwt.sign({userId:userExists._id},process.env.JWTPASSWORD)
    res.status(200).json({
        user:userExists,
        token
    })
   }else{
    res.status(404).json("invalid email/password")
    }
  
   }
   
   catch(err){
    res.status(401).json(err)
}
   } 

// get all users
exports.getAllUser = async (req,res)=>{
    console.log("inside getUser");
   
   
   try{
   const allUsers = await users.find().select('-password')
    res.status(200).json(allUsers)
   }
   
   catch(err){
    res.status(401).json(err)
}
   } 
// get oneUser
exports.getOneUser = async (req,res)=>{
    console.log("inside getOneUser");
   const{email,password}=req.body
   console.log(email,password);
   
   try{
   const userExists = await users.findOne({email}).select('-password')
   
    res.status(200).json(userExists)
   }
   
   catch(err){
    res.status(401).json(err)
}
   } 

