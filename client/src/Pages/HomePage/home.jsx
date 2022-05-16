import  styled from 'styled-components';
import Header from './components/header/header';
import Carousel from './components/Carousel/Carousel';
import SearchAndFav from './components/searchAndFav/searchAndFav';
import Products from './components/Products/products';
import  App from '../../App'
import Footer from './components/Footer/footer';
import Added from './components/added/added'
import { useSelector } from 'react-redux';

const Container=styled.div`
`
const FilterContainer= styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin:5px 0;
`
const FilterItemContainer= styled.div`
display:flex;


`


const FilterItem=styled.select`
font-weight:5px;
padding:0;

`
const Option= styled.option`
`
const Type= styled.p`
font-size:13px;
margin-right:10px
`
const Home = () => {
    return (   
        
 <App>

        <Container>

       <Header/>
       <Added/>
       <FilterContainer>
           <FilterItemContainer>

           <Type>Categories:</Type>
       <FilterItem  name={'Catergory'} >
           <Option  value={'homeAppliances'}>Home Appliances</Option>
           <Option  value={'gadgets'}>Gadgets</Option>
           <Option  value={'mensClothing'}>Men Outfit</Option>
           <Option  value={'womensClothing'}>Women Outfit</Option>
       </FilterItem>
           </FilterItemContainer>
           <FilterItemContainer>

       <Type>Sort:</Type>
       <FilterItem  name={'sort'} >
           <Option  value={'newest'}>Newest</Option>
           <Option  value={'gadgets'}>Price(from lowest to highest)</Option>
           <Option  value={'mensClothing'}>Price(from highest to lowest)</Option>
       </FilterItem>
           </FilterItemContainer>
       </FilterContainer>
    <SearchAndFav/>
    <Carousel/>
    <Products/>
    <Footer/>
    </Container>
 </App>
        
    );
}
 
export default Home;