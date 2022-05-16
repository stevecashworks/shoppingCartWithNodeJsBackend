import { data } from "./productsData";
import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { addToCart, removeNotice} from "../../../../cartSlice";
import { useDispatch,useSelector} from "react-redux";
 const Container = styled.div`
 
 width:100%;
 margin-top:30px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;


 `
 
 const Product= styled.div`
 display:flex;
 width:200px;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 background-color: rgba(224, 228, 230,.5); 
 margin:15px;
 transition: 1s all ease-in;

 
 `
 const OptionContainer=styled.button`
 display:flex;
 align-items:center;
 justify-content:center;
 width:40px;
 height:40px;
 background-color:white;
 border-radius:50%;
 border:1px solid lightgrey;
 `
 const ProductOptions=styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  opacity:0;
  ${Product}:hover  &{
 opacity:0.6;
  }

 `

 const Img= styled.img`
 margin-top:10px;
 height:100px;
 width:100px;
 
 

 ` 


 const  Price= styled.p`
 text-align:center;
 `
  const Name= styled.h5`
  text-transform:capitalize;
  `
  const Products = () => {
    const cartItems= useSelector(state=>state.cart.cartItems)
  const dispatch= useDispatch();
  const add= (id,price,quantity=1)=>{
     dispatch(addToCart({productId:id,price, quantity}))
     console.log(cartItems)

     setTimeout(()=>{dispatch(removeNotice())},2000)

  }
  
  return ( <Container>
         {data.map(product=>
         <Product>
             <Img src={product.img}/>
             <Name>{product.productName}</Name>
             <ProductOptions>
               <OptionContainer onClick={()=>{add(product.id,product.price)}}>
               <ShoppingCartOutlinedIcon style={{color:'black',opacity:0.5}}/>
              </OptionContainer>
              <OptionContainer>
               <FavoriteBorderOutlinedIcon style={{color:'black',opacity:0.5}}/>
                </OptionContainer>
               <OptionContainer>

           <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
               <SearchOutlinedIcon style={{color:'black',opacity:0.5}}/>
         </Link>
               </OptionContainer>



             </ProductOptions>
             <Price>{`$${product.price}`}</Price>
             
            
         </Product>
         )}
            
                </Container>);
}
 
export default Products;
     