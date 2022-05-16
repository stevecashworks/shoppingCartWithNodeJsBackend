const jwt= require('jsonwebtoken')
require('dotenv').config()
const verifyToken=(req,res,next)=>{
    if(req.headers.token){
      const authToken=req.headers.token.split(" ")[1]
      if(authToken){
         jwt.verify(authToken, process.env.jwt_pass,(err,user)=>{
           if(err){
             return res.status(403).json('Invalid Token')
           }
           else{
            if(req.params.id!==user.id){
              return res.status(403).json("incorrect Token")
            }
            else{next()} 

           }
         })
      }

    }
    else{
      res.status(403).send('Invalid token')
    }
}
 const verifyTokenAndAdmin= (req,res,next)=>{
  if(req.headers.token){  
  const authToken=req.headers.token.split(" ")[1]
    if(authToken){
      jwt.verify(authToken,process.env.jwt_pass,(err,user)=>{
      if(err){
        return res.status(403).json("Invalid token")
      }
      else{
        req.allowed= user.isAdmin
        next()
      }
      })
    }
  }
  else{
    res.status(403).json("No token  provided")
  }
 }
module.exports= {verifyToken, verifyTokenAndAdmin}