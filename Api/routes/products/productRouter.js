const express= require('express')
const {verifyTokenAndAdmin}=require('../../verify')
const {startPage,addProduct,getOne, editProduct,deleteProduct}= require('./Productscontroller')
const router= express.Router()
router.route('/all').get(startPage)
router.route('/add').post(verifyTokenAndAdmin,addProduct)
router.route('/product/:id').get(getOne)
router.route('/product/:id').put(verifyTokenAndAdmin, editProduct).delete(verifyTokenAndAdmin,deleteProduct)




module.exports=router