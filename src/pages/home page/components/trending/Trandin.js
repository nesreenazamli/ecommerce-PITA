import React from 'react'
import { StyledBtn } from '../herosection/Hero.Styled'
import imgtrend from "../../images/ImagePlaceholder.png"
import { StyledAllTrend, StyledTrendContimg, StyledTrendH, StyledTrendhe, StyledTrendimg, StyledTrendp, StyledTrendtext } from './Tranding.Styled'

const Trandin = () => {
  return (
    <>
        <StyledAllTrend>
          <StyledTrendtext>
            <StyledTrendhe>
            TRENDING
            </StyledTrendhe>
            <StyledTrendH>
            Caring about you and your body.
            </StyledTrendH>
            <StyledTrendp>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </StyledTrendp>
            <StyledBtn>
             See Collection
            </StyledBtn>
          </StyledTrendtext>

          <StyledTrendContimg>
             <StyledTrendimg src={imgtrend}/>
          </StyledTrendContimg>

        </StyledAllTrend>

    
    </>
  )
}

export default Trandin