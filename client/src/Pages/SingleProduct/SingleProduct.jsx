import styled from 'styled-components';
import Header from '../HomePage/components/header/header';
import Footer from '../HomePage/components/Footer/footer';
import {useState} from 'react'
import { useLocation } from 'react-router-dom';
import { data } from '../HomePage/components/Products/productsData';
import App from '../../App';

const ProductContainer= styled.div`
height:100%
`
const TitleContainer= styled.div`
display:flex;
background-color:teal;
color:white;
align-items:center;
justify-content:center;
text-transform:capitalize;
height:60px;
`
const Title=styled.h1`
color:white;
`
const ProductDetails= styled.div`
display:flex;

border:1px solid black;
`
const ProductImg= styled.img`
justify-self:center;
height: 400px;
width:300px;
`
const ImgContainer= styled.div`
 flex:3;
 padding:20px;
 display:flex;
` 
const  DescContainer= styled.div`
flex:1;
display:flex;
flex-direction:column;
background-color:rgba(235, 247, 252,.6);
background-color:teal;

color:white;
font-size:20px;
font-weight:10;
justify-content:space-between;

`
const Buttons= styled.div`
 display:flex;
 justify-self:center;
 align-self:center;
 width:300px;
 top:100px; justify-content:space-between;
 align-items:center; 
 position:relative;

`
const CartBtn= styled.button`
bottom:100px;
background:transparent;
border:none;
color:blue;

height:50px;
position:relative;
width:150px;
border-radius:20%;
align-self:center;
font-size:20px;
text-transform:capitalize;
& hover:{
    transform:scale(1.5)
}
`
const Btn= styled.button`
height:20px;
 color:${'white'};
 background-color:orangered;
 
 display:flex;
 align-items:center;
 justify-content:center;
 border:none;
 font-size:40px;
 font-weight:400;
 width:100px;
 height:50px;


`
const Description= styled.p`
text-align:center;
`
const  ButtonsAndPrice=styled.div`

`
const Price= styled.p`
opacity:${props=>{if(props.visible){return 1};return 0}}
`

const SingleProduct = () => {
    const  [quantity,setQuantity]= useState(0)
     const id=useLocation().pathname.split('/')[2]
     const currentProduct= data.find(p=>p.id===Number(id))
     
    return ( 
        <App>

        <ProductContainer>
            <Header/>
            <TitleContainer>
                <Title>{currentProduct.productName}</Title>
            </TitleContainer>
            <ProductDetails>
                <ImgContainer>
                <ProductImg src={currentProduct.img}/>
                </ImgContainer>
                <ButtonsAndPrice>
                   <Price  visible={quantity>0}>{ `Price:$${quantity*currentProduct.price}`}</Price>  
                    <Buttons>
                     <Btn col='red'onClick={()=>{setQuantity(prev=>{
                         
                         if(prev===0){
                             return prev;
                            }return prev-1; })}}>
                         -
                     </Btn>
                     <p>{quantity}</p>
                     <Btn col='blue' onClick={()=>{setQuantity(quantity+1)}}>
                         +
                     </Btn>
                 </Buttons>
                </ButtonsAndPrice>
                
                <DescContainer>
                    <Description>
 { currentProduct.description||'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis commodi odio magnam consectetur, magni repellendus consequuntur, obcaecati necessitatibus illo beatae iure illum! Amet eligendi error exercitationem culpa, doloribus vitaeLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis commodi odio magnam consectetur, magni repellendus consequuntur, obcaecati necessitatibus illo beatae iure illum! Amet eligendi error exercitationem culpa, doloribus vitaeLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis commodi odio magnam consectetur, magni repellendus consequuntur, obcaecati necessitatibus illo beatae iure illum! Amet eligendi error exercitationem culpa, doloribus vitae'}
                    </Description>
                
                 <CartBtn>Add to cart</CartBtn>
                </DescContainer>

            </ProductDetails>
 <Footer/>
        </ProductContainer>
                         </App>
    );
}
 
export default SingleProduct;