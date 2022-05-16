const asyncWrapper=require('../../middleware/async')
const userSchema= require('../../schemas/user')
const jwt= require('jsonwebtoken')
require('dotenv').config()
const crypto= require('crypto-js') 
const addUser= asyncWrapper(async(req,res)=>{
    const user= req.body 
    const inputPassword= user.password;
     if((!user.username)||(!inputPassword)){
         return res.status(403).json('check username or password')
     }
     else{
         const hashed= crypto.AES.encrypt(inputPassword,process.env.crypto_key).toString()
 user.password=hashed
   const newUser=  await userSchema.create(user)
   res.status(201).json(newUser)
     }
})
const login= asyncWrapper(async(req,res)=>{
  const Username= req.body.username;
  const Password= req.body.password;
   const thisUser= await userSchema.findOne({username:Username})
   if(!thisUser){
    return res.status(403).json("User not found")
   }
   else{
       const decryptedPassword=crypto.AES.decrypt(thisUser.password, process.env.crypto_key).toString(crypto.enc.Utf8)
       if(Password!==decryptedPassword){
         return res.status(403).json('Oops incorrect password')
       }
       else{
         const accessToken=jwt.sign({isAdmin:thisUser.isAdmin,id:thisUser._id},process.env.jwt_pass)
         const {password, ...others}= thisUser._doc
         return res.status(200).json({...others,accessToken})
       }
   }
})
const editUser= asyncWrapper(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{$set:req.body})
})
 const deleteUser=asyncWrapper(async(req,res)=>{
  await userSchema.findByIdAndDelete(req.params.id)
  res.status(200).json("deleted succesfully!")
})
const allUsers= asyncWrapper( async(req,res)=>{
   const users= await userSchema.find()
   return req.status(200).json(users)

})
module.exports={addUser,login,deleteUser,editUser, allUsers }