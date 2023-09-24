import React from 'react';
import {FaTimes} from "react-icons/fa";
import {StyledOffer, StyledOfferText} from "./Offer.Styled";
import {Typography} from "../../App.Styled";

function Offer({handelShow}) {
    return (
        <StyledOffer>
          <StyledOfferText>
              70% off storewide — Limited time
          </StyledOfferText>
            <Typography onClick={handelShow}>
            <FaTimes/>
            </Typography>

        </StyledOffer>
    );
}

export default Offer;