const mongoose= require('mongoose')
const productShema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        

    },
    categories:{
        type:Array, required:true
    },
    description:{
    type:String,
    required:true
    },
    price:{
        type:Number,
        required:true
        },
        img:{ type:String ,  default:'none'},
        

    
}, {timestamps:true})
module.exports= mongoose.model('product', productShema)