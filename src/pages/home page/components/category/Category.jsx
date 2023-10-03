import { CategorySliderStyled } from './Category.styled';
import SliderCardCategory from './SliderCardCategory';
import {Container, FlexBox} from "../../../../App.Styled";
import {Typography} from "@mui/material";
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <Container>
      <FlexBox items='center' justify='space-between' margin="52px 0 0 0">
        <Typography fontSize='34px' fontWeight={500}>Categories</Typography>
        <Link to={"/category"}><Typography color={"#000"} borderBottom={"1px solid"} fontWeight={500} fontSize='25px'>See all categories</Typography></Link>
      </FlexBox>

      <CategorySliderStyled>
        <SliderCardCategory />
      </CategorySliderStyled>
    </Container>
  );
};

export default Category;
