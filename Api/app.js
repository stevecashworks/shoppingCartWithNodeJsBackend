const express= require('express')
const productRouter= require('./routes/products/productRouter')
const bodyParser= require('body-parser')
const notFound=require('./middleware/notfound')
const connectDb=require('./connect')
const cors= require('cors')
const userRoute= require('./routes/users/userRoute.js')
const cartRoute= require('./routes/cart/cartRouter')
const errorHandler= require('./middleware/errorHandler')

require('dotenv').config()
const app= express()
app.get('/search',(req,res)=>{
    const data= {hello:true}
    res.json(data)

})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/products',productRouter)
app.use('/cart', cartRoute)
app.use('/user', userRoute )

app.use(errorHandler)

app.use(notFound)
const port= process.env.Port||5001 
const start= async()=>{
    try {
        await connectDb(process.env.Conn_str)
app.listen(port,()=>{console.log(`server is listening on port ${port}`)})
        
    } catch (error) {
         console.log(error)
    }
} 

start()
