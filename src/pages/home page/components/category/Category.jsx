import { CategorySliderStyled } from './Category.styled';
import SliderCardCategory from './SliderCardCategory';
import {Container, FlexBox} from "../../../../App.Styled";
import {Typography} from "@mui/material";

const Category = () => {
  return (
    <Container margin='114px 52px'>
      <FlexBox items='center' justify='space-between'>
        <Typography fontSize='34px' fontWeight={500}>Categories</Typography>
        <Typography fontSize='18px' fontWeight={500}>See all categories</Typography>
      </FlexBox>

      <CategorySliderStyled>
        <SliderCardCategory />
      </CategorySliderStyled>
    </Container>
  );
};

export default Category;
