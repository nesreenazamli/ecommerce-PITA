import { useEffect, useState } from "react";
import axios from "axios";
import { Container, FlexBox } from "../../App.Styled";
import { CircularProgress, Typography } from "@mui/material";
import Layout from "../main layout/Layout";
import CategoryCard from "../home page/components/category/CategoryCard";
import { CardWrapper } from "../home page/components/category/Category.styled";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCategory = async () => {
    try {
      setLoading(false);
      const { data } = await axios.get("https://e-commerce-api-dev.onrender.com/api/categories");
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <Layout>
      {loading ? (
        <FlexBox items="center" justify="center">
          <CircularProgress color="inherit" /> :
        </FlexBox>
      ) : (
        <Container>
          <Typography fontSize="34px" margin={"50px 0 30px 0"} fontWeight={500}>
            Categories
          </Typography>
          <CardWrapper>
            {categories.map((item) => (
              <CategoryCard key={item.id} item={item} width={"32%"} />
            ))}
          </CardWrapper>
        </Container>
      )}
    </Layout>
  );
};

export default Categories;
