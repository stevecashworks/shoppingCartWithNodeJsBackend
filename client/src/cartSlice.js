import {createSlice} from  '@reduxjs/toolkit'
 const cartSlice= createSlice({
     name: 'cart',

     initialState:{
      userId:'',
        cartItems:[],
        noOfItems:0,
        newlyAdded:false

     },
     reducers:{
         addToCart:(state,action)=>{
             console.log(action.payload)
              let {productId, quantity,price}= action.payload;
              
         const productExists= state.cartItems.some(prod=>prod.productId===productId)
           if(productExists){
               alert('exists')
               state.cartItems= state.cartItems.map(item=>{
                   if(item.productId===productId){
                     return {...item,quantity,price}
                   }
                   return item
               })
           }
           else{
            state.cartItems= [...state.cartItems,action.payload];
            state.noOfItems= state.noOfItems+1;
             state.newlyAdded=true;

           }
         
         },
     
         removeNotice:(state,action)=>{
             state.newlyAdded=false

         }
        
 }
})
 
 export const {addToCart ,removeNotice}= cartSlice.actions
export default cartSlice.reducer