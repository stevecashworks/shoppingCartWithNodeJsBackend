 const cartSchema= require('../../schemas/Cart')
const addToCart =  async(req,res)=>{
  console.log(req.body)
  try {
      const    {id,product}= req.body;
      // checks if the ids already exists
           const  thisCart=  await cartSchema.find({UserId:id})
      //execute this if   the cart is empty
           if (thisCart.length===0){
           await cartSchema.create({userId:id, products:[{...product}]})
           return res.status(201).json({msg:'created'})
      }
      else{
  const newCart= await  cartSchema.find({userId:id}/*{$set:{products:[...thisCart.products,...product]}},{new:true}*/)
  return res.status(200).json(newCart)

      }
        
  } catch (error) {
 console.log(error)  
 res.status(400).json(error)    

}

}
const getCart= async(req,res)=>{
  const thisCart= await cartSchema.find({userId:req.params.id})
  return res.status(200).json(thisCart)
}
 module.exports= {addToCart,getCart}  