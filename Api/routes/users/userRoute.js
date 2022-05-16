const userRoute= require('express').Router()
require('dotenv').config()
const User= require('../../schemas/user.js')
const crypto= require('crypto-js')
const jwt= require('jsonwebtoken')
const {addUser,login, deleteUser}= require('./userController')
const {verifyToken, verifyTokenAndAdmin}=require('../../verify')
 userRoute.route('/add').post(addUser)
userRoute.route('/login').post(login)
userRoute.route('/edit/:id').put(verifyToken, async(req,res)=>{
  if(req.params.id!==req.user.id){
    return res.status(401).json('your\'re not allowed to do that ')
  }
  else{
   const editedUser  = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
   res.status(201).json(editeduser)
  }
})
 userRoute.route('/all').get(verifyTokenAndAdmin,async(req,res)=>{
   if(req.allowed){ 
     try{const allUsers= await User.find()
  return  res.status(200).json(allUsers)}
    catch(err){
      console.log(err)
    }

  }

res.status(200).json('Only admins can access this')
 })
 userRoute.route('/singleuser/:id').get(verifyTokenAndAdmin,async(req,res)=>{
 if(req.allowed){
   try {
      const thisUser= await User.findById(req.params.id)
      return res.status(200).json(thisUser)
   } catch (error) {
     
   }
 }
  res.status(400).send("Operation not allowed for this user")
 })
 //editUser
 userRoute.route("/:id").delete(verifyToken,deleteUser)


module.exports= userRoute