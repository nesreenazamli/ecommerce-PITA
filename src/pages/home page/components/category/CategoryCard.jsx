import { Typography } from '@mui/material';
import {  StyledImage } from '../../../../App.Styled'
import { CategoryCardImg, CategoryCardWrapper } from './Category.styled'

const CategoryCard = ({ item, width }) => {
  const { name, thumbnail } = item;
  return (
    <CategoryCardWrapper width={width}>
      <CategoryCardImg>
        <StyledImage width='100%' height='100%' fit='contain' src={thumbnail} alt='' />
      </CategoryCardImg>
        <Typography textAlign='center' fontSize='18px' margin={"10px 0 50px 0"} fontWeight={500}>{ name }</Typography>
    </CategoryCardWrapper>
  )
}

export default CategoryCard