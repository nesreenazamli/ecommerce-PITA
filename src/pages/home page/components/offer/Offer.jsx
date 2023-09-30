import { AiOutlineClose } from 'react-icons/ai'
import  { OfferStyled }  from './Offer.styled'
import {Typography} from "@mui/material";

const Offer = ({ handleShow }) => {
  
  return  (
      <OfferStyled items='center' justify='flex-end' onClick={handleShow}>
            <Typography flex='1' fontWeight={500} fontSize='14px'>70% off storewide — Limited time </Typography>
            <AiOutlineClose />
      </OfferStyled>

    )
}

export default Offer