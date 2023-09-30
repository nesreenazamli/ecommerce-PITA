// import Category1 from '../../assets/Category1.png'
import { FlexColumn, StyledImage, Typography } from '../../../../App.Styled'
import { CategoryCardImg } from './Category.styled'

const CategoryCard = ({ item }) => {
  const { name, thumbnail } = item;
  return (
    <FlexColumn >
      <CategoryCardImg>
        <StyledImage width='100%' height='100%' radius='20px' src={thumbnail} alt='' />
      </CategoryCardImg>
        <Typography textalign='center' fontSize='18px' fontWeight={500}>{ name }</Typography>
    </FlexColumn>
  )
}

export default CategoryCard