 const mongoose=  require('mongoose');
 const userSchema= new mongoose.Schema({
     username:{type:String,required:[true,'please input a username'],unique:[true,'username  already exists']},
     password:{type:String,required:[true,'please input a password']},
     email:{type:String,required:[true,'please input an email'],unique:[true,'this email has been taken ']},
     phone:{type:Number,required:[true,'please input an phone number']},
     isAdmin:{type:Boolean, default:false}


 },{timestamps:true})

 module.exports= mongoose.model('user', userSchema)