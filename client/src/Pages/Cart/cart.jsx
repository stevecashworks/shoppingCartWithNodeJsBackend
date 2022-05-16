import styled from 'styled-components'
import Header from '../HomePage/components/header/header'
import { useState } from 'react';

import { data as productsData} from '../HomePage/components/Products/productsData';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../cartSlice';


const  OverAll= styled.div``
const Container= styled.div`
border:0px solid gray;
 height:100vh;
 width:40%;
 margin:0 auto;
 margin-top:20px;
 display:flex;
 flex-wrap:wrap;
 `
  const ProdCon= styled.div`
   width:80%;
   margin:0 auto;
   margin:20px 20px;
   display:flex;
   flex-direction:column;

  `
    const ProdName= styled.h3`
    text-align:center;
    `
    const Img= styled.img`
    height:350px;  
    `
 const  ProductContainer= styled.div``
 const Buttons= styled.div`
 display:flex;
 margin:0 auto;
 align-items:center;
 width:30%;
  justify-content:space-between;
  

 `
 const Quantity= styled.h5`
 display:flex;
 justify-content:center;
 align-items:center;
 height:30px;
 width:30px;
 text-align:center;
 
  
 `
 const Btn= styled.button`
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 background-color:orangered;
 border:none;
 width:30px;
 height:30px;
 `
 const PriceCon= styled.div`
 display:flex;

 `
 const Price= styled.h5`
 
 `
 const Product=(props)=>{
 const dispatch= useDispatch()
 const newCart= useSelector(state=>state.cart.cartItems)
    const [quants, setQuants]= useState(props.quantity);
   const reduce=()=>{ setQuants((quants)=>{
       if(quants===0){
           return quants
       }
       return quants-1
   })
}
   const add=()=> {setQuants(quants+1)
    dispatch(addToCart({productId:props.id,quantity:quants,price:props.price*quants}))
    console.log(newCart)
   }
   console.log(productsData)
   
    return(

<ProdCon>
<ProdName>
    {props.name}
</ProdName>
<Img src={props.image}/>
<PriceCon>
<Buttons>
 <Btn onClick={reduce} >-</Btn>
 <Quantity>{quants}</Quantity>
 <Btn onClick={()=>add(props.id,props.price)}>+</Btn>
 
</Buttons>
<Price> Price:$ <span style={{color:'blue'}}>{Number(props.price)*quants}</span></Price>
</PriceCon>
</ProdCon>
     )
 }
const Cart=()=>{
     const cartItems= useSelector(state=>state.cart.cartItems)
       const cartList= ()=>{
           const arr=[]
           for(let x of cartItems){
               arr.push(productsData.find(prod=>prod.id===x.productId));

           }
           return arr

       }
      const cartProducts= cartList()
    
        return(
      <OverAll>

          <Header/>
      <Container>
          
        {cartProducts.map(x=><Product price={x.price} id={x.id} key={x.id} quantity={1} name={x.productName} image= {x.img} />)}
          </Container>
      </OverAll>
          )


 }
 export default Cart