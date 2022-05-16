
import styled from 'styled-components'
import {useSelector} from 'react-redux';


const  Container= styled.div`
 width:100%;
 text-align:center;
 display:flex;
 justify-content:center;
 align-items:center;
 color: rgb(4, 51, 4);
 background-color:rgba(188, 245, 102,.5);
 opacity:${props=> props.visible?'1':'0'};
 transition: 1s all ease;

`
const Notice= styled.p`
font-size:20px;
`
 const Added = () => {
     const visible= useSelector(state=>state.cart.newlyAdded)
     return ( 
         <Container visible={visible}>
             <Notice> Item  was added to cart!</Notice>

         </Container>
      );
 }
  
 export default Added;