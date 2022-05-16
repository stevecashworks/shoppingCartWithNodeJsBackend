const asyncWrapper=require('../../middleware/async')
const productSchema= require('../../schemas/productSchema')
const {createCustomError}= require('../../middleware/customError')
const startPage= asyncWrapper(async(req,res)=>{
  const data= await  productSchema.find()
   res.status(200).json({connected:true, message:data})

})
const addProduct=asyncWrapper(async(req,res)=>{
   if(req.allowed){
   const added= await productSchema.create(req.body)
   return res.status(201).json(added)
   }
   res.status(403).send("This Operation isn\'t allowed for this user type")
})
const getOne= asyncWrapper( async( req,res,next)=>{
      const {id}= req.params;
      const   product= await productSchema.findOne({_id:id})
     if(!product){
        const error= createCustomError(`There is no product with id:${id}`, 404)
       return next(error);

     }
     return  res.status(200).json(product)
   })
   const editProduct= asyncWrapper(async(req,res)=>{
      if(req.allowed){
      const edited=  await productSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
      return res.status(200).json(edited)}
      res.status(401).send('This Operation isn\'t allowed for this user')
      
   })
   const deleteProduct=asyncWrapper(async(req,res)=>{
       if(req.allowed){
      await productSchema.findByIdAndDelete(req.params.id) 
      
      
      }
       res.status(200).json({result:req.allowed?"successful":"you're not allowed to do that"})
   
   })


module.exports= {startPage,addProduct, getOne, editProduct,deleteProduct}
