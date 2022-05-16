import styled from 'styled-components';
import {useEffect, useState} from 'react';

import { useNavigate } from 'react-router-dom';

const Container= styled.form`
margin:0 auto;
width:300px;
height:500px;
display:flex;
flex-direction:column;
margin-top:100px;
 align-items:center;
 justify-content:center;
 background-color: rgba(3, 3, 65,.8);
 border-radius:10%;


`
const ParamsCon= styled.div`
margin-bottom:10px;
`

const Title= styled.h3`
text-align:center;
color:gray;
`
const Inp= styled.input`
font-size:15px;
font-weight:lighter;

 width:230px

`

const LoginBtn= styled.button`
 background-color:transparent;
 color:gray;
 font-size:20px;
 font-weight:lighter;
 width:250px;
  margin-top:10px;
  border:none;
  `
  
  const Login = () => {
   const nav=useNavigate()
   
   const [username, setUsername]= useState('');
   const [password, setPassword]= useState('');
   
   const submit= async(e)=>{
      e.preventDefault();
        const data= {username,password}
         await fetch('/user/login',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
               'Content-Type':'application/json'
            }
         }).then(res=>res.json()).then(dat=>{
             console.log(dat)
            if(typeof(dat)==='string'){
               alert(dat);
            

            }
            else{
            
            

       

            
            
            }
      })
   }
   
    
      return ( 
         
      <Container >
       <ParamsCon>
       <Title>
           Username:
           
        </Title>
        <Inp placeholder='Please input your username' onChange={(e)=>{setUsername(e.target.value)}}/>
       </ParamsCon>
       <ParamsCon>
       <Title>
           Password
        </Title>
        <Inp placeholder='Please input your  password' type= 'password' onChange={(e)=>{setPassword(e.target.value)}}/>
 
       </ParamsCon>
               <LoginBtn type= 'submit'onClick={(e)=>{submit(e)}}>Login</LoginBtn>
      </Container>
    );
}
 
export default Login;
