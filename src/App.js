
import {useState} from "react";
import HomePage from "./pages/home page/HomePage";
import {Route, Routes} from "react-router-dom";
import Router from "./Router";
import NavBar from "./components/nav bar/NavBar";
import SignIn from "./pages/sign in/SignIn";


function App() {
  return (
    <div className="App">
        {/*<NavBar />*/}
        {/*<Router />\*/}
        <SignIn />
    </div>
  );
}

export default App;
