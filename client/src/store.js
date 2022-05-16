 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from './cartSlice';
 const state= configureStore({
     reducer:{
         cart:cartReducer 

     }
 })
 export default state
 