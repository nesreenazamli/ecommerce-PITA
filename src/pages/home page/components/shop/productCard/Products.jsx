// import  { useEffect, useState } from 'react'
// import axios from 'axios'
import ProductCard from './ProductCard';
const Products = () => {
//     const [products, setProducts] = useState([]);

//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get('https://e-commerce-api-fylh.onrender.com/api/products')
//       console.log(data)
//       setProducts(data);
//     } catch (error) {
//       console.error(error); 
//     }
//   }

//   useEffect(() => {
//     getAllProducts();
//   }, []);
  return (
    // <>
    //     {
    //         products.map((item) => <ProductCard key={item.id} item={item} />)
    //     }
    // </>
    <>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

    </>
  )
}

export default Products