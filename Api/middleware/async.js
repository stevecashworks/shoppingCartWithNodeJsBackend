const {createCustomError}= require('./customError')
const asyncWrapper=(fn)=>{
    return async(req,res,next)=>{
        try {
         await   fn(req,res,next)
            
        } catch (error) {
            const newError= createCustomError(error.message,500)
            next(newError)
        }
    }
}
module.exports= asyncWrapper