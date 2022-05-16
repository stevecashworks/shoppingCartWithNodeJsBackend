const notFound=(req,res)=>{
    res.status(404).send('ooops path not found')
}
module.exports=notFound