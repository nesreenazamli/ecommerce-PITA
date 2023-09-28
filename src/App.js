
import {useEffect, useState} from "react";
import HomePage from "./pages/home page/HomePage";
import {Route, Routes} from "react-router-dom";
import  {Router, AuthRouters} from "./Router";
import NavBar from "./components/nav bar/NavBar";
import SignIn from "./pages/sign in/SignIn";


function App() {

const [user, setUser] = useState({})


    const userData = JSON.parse(localStorage.getItem("user"))

    console.log(userData, "userData")


  return (
    <div className="App">
        {/*<NavBar />*/}
        {user ? <Router setUser={setUser} /> : <AuthRouters/> }
        {/*<SignIn />*/}
    </div>
  );
}

export default App;
