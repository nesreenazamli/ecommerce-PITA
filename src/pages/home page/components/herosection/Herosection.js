import React from 'react'
import { StyledAll, StyledBtn, StyledHero, StyledImg, StyledImgWrapper, StyledPar, StyledText } from './Hero.Styled'
import image1 from "../../images/Pasteimage.png";

const Herosection = () => {
  return (
    <>
    <StyledAll>
   <StyledHero>
      <StyledText>
      Care products for every home.
      </StyledText>
      <StyledPar>
      Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
        </StyledPar>
        <StyledBtn>
        See Collection
        </StyledBtn>
        

    </StyledHero>
    <StyledImgWrapper>
         <StyledImg src={image1} />
       </StyledImgWrapper>  
       </StyledAll>
    </>
  )
}

export default Herosection