import styled from 'styled-components'
import data from './carouselData'
import {useState,useEffect} from 'react'

const  Container=  styled.div`
display:flex;
position: relative;
width:80vw;
overflowX:hidden;
height:200px;


`
 const Image= styled.img`
  width:150px;
  height:150px;
  margin: 0px 30px;
  
  
 `
 const Group= styled.div`
 display:flex;
  flex-direction:row;
  position:absolute;
  width:80vw;
  opacity: ${props=>props.active?'1':'0'};
  justify-content:center;
  transform:translateX(${props=>props.active?'0':'100vw'});
  transition: 2s  ease all;
  `
 const Block= styled.div`
 `
 const Name= styled.p`
 text-align:center;
 `
const Carousel = () => {
           const [activeIndex,setActiveIndex]=useState(1)
           useEffect(()=>{
               setInterval(()=>{
                setActiveIndex((activeIndex)=>{
                    if(activeIndex===3){
                        return 0
                    }
                    return activeIndex+1
                })
            
               },5000)
              }   ,[])
   return (
       <Container>
           {data.map((array,index)=>{
               
               
            return <Group active= {Boolean(activeIndex===index)}>
            
                   {array.map(x=>{
                       return <Block>
                           <Image src= {x.img}/>
                           <Name>{x.category}</Name>

                       </Block>
                   })}
               </Group>
           })}
       </Container>
   );
}

export default Carousel;