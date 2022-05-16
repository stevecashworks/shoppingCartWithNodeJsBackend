const {CustomError}= require('./customError')
const errorHandler=(err,req,res,next)=>{
if(err instanceof CustomError){
   console.log(err)
   return res.status(err.status).json({msg:err.message})
   
}
return res.status(500).json({msg:'Oops an error occured'})
}
module.exports= errorHandler