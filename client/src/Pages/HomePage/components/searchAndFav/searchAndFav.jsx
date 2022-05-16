import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

import {Link} from 'react-router-dom';
  import {useSelector} from 'react-redux';


const Container=  styled.div`
display:flex;
align-items:center;
justify-content: space-around;
flex-direction:row;

`
const CompLogo=styled.h1`
font-family: Dancing Script, cursive;
flex:1;
margin-left:10px;

`
const SearchContainer= styled.div`
display:flex;
font-size:40px;
width:500px;
flex:1;
`

const SearchInp= styled.input`
font-size:30px;
border:none;
margin-left:0;
`
const Search= styled.button`
display:flex;
border:1px solid grey;
height:40px;
align-items:center;


${SearchInp}: focus & {
    border:none;
}
`
const SearchBtn=styled.button`
color:white;
background-color:black;
font-weight:400;
opacity:0.9;
padding: 0 15px; 
border:none;
`

const Preferences= styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
padding:10px;
width:300px;
` 

const SearchAndFav
 = () => {

    

    return ( 
        <Container>
            <CompLogo>A3Gadgets</CompLogo>
            <SearchContainer>
                <Search>
                    <SearchInp placeholder="Search for  products here"></SearchInp>
                <SearchOutlinedIcon style={{color:'grey'}}/>
                </Search>
                <SearchBtn onClick={()=>{}}>Search</SearchBtn>

            </SearchContainer>
            <Preferences>
                <Link to='/login'>
                <PersonOutlinedIcon style={{color:'grey', marginRight:'15px', fontSize:'35px'}}/>
                </Link>
                <Badge badgeContent={useSelector(state=>state.cart.noOfItems)} color='secondary' style={{color:'grey' , marginRight:'15px' , fontSize:'35px'}}>
                <FavoriteBorderOutlinedIcon />

                </Badge>
                <Link to='cart'>
                <Badge badgeContent={1} color='secondary' style={{color:'grey', marginRight:'15px' , fontSize:'35px'}}>
               <ShoppingCartOutlinedIcon />
                </Badge>
                </Link>
            </Preferences>
        </Container>
     );
}
 
export default SearchAndFav
;