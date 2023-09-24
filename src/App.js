import Offer from "./components/offer section/Offer";
import {useState} from "react";

function App() {
    const [show, setShow] = useState(true)
  return (
    <div className="App">
        {show && <Offer handelShow={() => setShow((prev) => !prev)} />}

    </div>
  );
}

export default App;
