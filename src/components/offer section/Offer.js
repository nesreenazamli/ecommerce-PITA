import React from 'react';
import {FaTimes} from "react-icons/fa";
import {StyledOffer, StyledOfferText} from "./Offer.Styled";

function Offer({handelShow}) {
    return (
        <StyledOffer>
          <StyledOfferText>
              70% off storewide — Limited time
          </StyledOfferText>
            <p onClick={handelShow}>
            <FaTimes/>
            </p>

        </StyledOffer>
    );
}

export default Offer;