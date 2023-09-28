import React from 'react'
import { StyledCard1, StyledInstgramCard, StyledInstgramHead, Styledspan } from './Instgram.Styled'
import imgcard1 from "../../images/Image Placeholder.png"
import imgcard2 from "../../images/Image Placeholder2.png"
import imgcard3 from "../../images/Image Placeholder3.png"
import imgcard4 from "../../images/Image Placeholder4.png"
import imgcard5 from "../../images/Image Placeholder5.png"
import imgcard6 from "../../images/Image Placeholder6.png"


const Instgram = () => {
  return (
    <>
     <Styledspan>
     #nayzakdesign
     </Styledspan>
     <StyledInstgramHead>
     On Instagram
     </StyledInstgramHead>

     <StyledInstgramCard>
       <StyledCard1 src={imgcard1}/>
       <StyledCard1 src={imgcard2}/>
       <StyledCard1 src={imgcard3} />
       <StyledCard1 src={imgcard4}/>
       <StyledCard1 src={imgcard5}/>
       <StyledCard1 src={imgcard6}/>

     </StyledInstgramCard>
    </>
  )
}

export default Instgram