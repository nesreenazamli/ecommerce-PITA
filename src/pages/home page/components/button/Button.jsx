import { StyledButton } from './Button.styled'

const Button = ({ text,padding, radius, width, margin }) => {
  return (
    <StyledButton 
    padding={padding} 
    width={width} 
    margin={margin}
    radius={radius}>
      {text}
    </StyledButton>
  )
}

export default Button