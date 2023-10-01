import React from 'react';
import {useParams} from "react-router-dom";

function Product(props) {
    const { id } = useParams();

    const product = {
        "view": 5,
        "thumbnail": "https://m.media-amazon.com/images/I/61Dvn0yceiL._AC_SX679_.jpg",
        "images": [
            "https://m.media-amazon.com/images/I/61c1bkLvF8L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61EBgh8aWoL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61HoUM4k-jL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71dCNC3mVwL._AC_SX679_.jpg"
        ],
        "rate": 5,
        "reviewCount": 3,
        "price": 24.99,
        "name": "iPhone Charger Fast Charging",
        "description": "USB C to Lightning Cable 3 Pack 6 FT [MFi Certified] iPhone Cable Type C to Lightning Cable Fast Charging Cord Compatible with iPhone 14 13 12 11 Pro Max X Plus and More",
        "discount": 72,
        "id": 1,
        "category": "Cable",
        "stock": 90
    }

    console.log(id, "id")

    return (
        <div>
            {product.name}
        </div>
    );
}

export default Product;