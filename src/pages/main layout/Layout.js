import {useState} from "react";
import Offer from "../../components/offer section/Offer";
import NavBar from "../../components/nav bar/NavBar";
import Footer from "../home page/components/footer/Footer";


const Layout = ({ children }) => {
    const [show, setShow] = useState(true)
    return (
        <>
            {show && <Offer handleShow={(prev) => setShow(!prev)} />}
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
export default Layout