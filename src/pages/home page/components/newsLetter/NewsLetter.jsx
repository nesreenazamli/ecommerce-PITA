import { Container, FlexColumn, Typography } from "../../../../App.Styled"
import { AiOutlineMail } from 'react-icons/ai'
import { ButtonStyled, FormAbsoluteStyled, FormStyled, InputStyled } from './NewsLetter.styled'
const NewsLetter = () => {
    const style = { fontSize: "20px", marginTop: '4px' };
  return (
   <Container margin='130px 0 100px'>
     <FlexColumn items='center' justify='center'>
        <Typography fontSize='40px' fontWeight={500}>Join Our Newsletter</Typography>
        <Typography fontSize='18px' margin='8px 0 32px 0' fontWeight={500}>Big discounts and right to your inbox.</Typography>

    <FormStyled>
        <FormAbsoluteStyled left='16px'>
            <AiOutlineMail style={style}/>
        </FormAbsoluteStyled>
         <InputStyled type='email' placeholder="Email address"/>
         <FormAbsoluteStyled right='16px'>
            <ButtonStyled>Sign up</ButtonStyled>
         </FormAbsoluteStyled>
    </FormStyled>

    </FlexColumn>
   </Container>
  )
}

export default NewsLetter