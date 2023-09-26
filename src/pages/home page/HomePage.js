import React, {useState} from 'react';
import Categories from "./components/Categories";
import Shopbrands from "./components/Shopbrands";
import Offer from "../../components/offer section/Offer";

function HomePage(props) {
    const [show, setShow] = useState(true)

    return (
        <>
            {show && <Offer handelShow={() => setShow((prev) => !prev)}/>}
            <Categories/>
            <Shopbrands/>
        </>
    );
}

export default HomePage;