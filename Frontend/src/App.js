import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "./index.css";
import Navbar from "./common/navbar";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { increment, decrement } from "./actions";

function App() {
  // const potCounter = useSelector((state) => state.potCounter);
  // const isLogged = useSelector((state) => state.isLogeed);
  // const dispatch = useDispatch();
  return (
    <div className='App'>
      <Navbar />
      <Header />
      {/* <h1>Counter:{potCounter}</h1> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* {isLogged ? <h3> Valuables here i should not see</h3> : ""} */}
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
