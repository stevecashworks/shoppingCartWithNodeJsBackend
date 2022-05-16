import SendIcon from '@mui/icons-material/Send'
import styled from "styled-components";
const  Container= styled.div`
height:400px;
display:flex;
background-color:rgba(247, 225, 225,0.8);
width:100%;

`
const Links= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
flex:1;

`
const  NewsLetter= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex:1;


`
const InputDiv= styled.div`
display:flex;
align-items:center;
background-color:white;
justify-content:center;
border:none;
width:70%


`
const EmailInp= styled.input`
flex:8;
border:transparent;
margin-right:0px;
height:100%;
`
const Footer = () => {
    return (  
<Container>
    <Links>
    <h1>Quick links</h1>
    <p>Shop Now</p>
    <p> About us</p>
    <p>Recieve Updates</p>
    <p>Send Report</p>
    <p>Become an Affiliate</p>
    <p>Sell</p>
    </Links>
    <NewsLetter>
        <h4> News letter</h4>
        <InputDiv>
        <EmailInp placeholder='Please enter your email to recieve updates'/>
        <SendIcon style={{flex:'2', backgroundColor:'teal',opacity:'1',color:'white'}}/>
        </InputDiv>
        
    </NewsLetter>

</Container>
    );
}
 
export default Footer;