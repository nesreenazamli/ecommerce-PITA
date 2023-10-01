import NavBar from "../../components/nav bar/NavBar";
import Footer from "../home page/components/footer/Footer";

const Layout = ({ children }) => {

    return (
        <>
            <NavBar />
               {children}
            <Footer />
        </>
    )
}
export default Layout