import * as React from "react";
// import { Provider, useSelector, useDispatch } from "react-redux";
// import { Provider } from "react-redux";

import { increment } from "../actions";
import { decrement } from "../actions";
// import "../style/index.css";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./home";
import Contact from "./contact";

function App() {
  // const potCounter = useSelector((state) => state.potCounter);
  // const isLogged = useSelector((state) => state.isLogeed);
  // const dispatch = useDispatch();
  // const store = createStore(rootReducer);

  return (
    // <Provider>
    <div className='app-container'>
      <Header />
      {/* <h1>Counter: {potCounter} </h1> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* {isLogged ? <h3> Valuables here i should not see</h3> : ""} */}
      <Home />
      <Contact />
      <Footer />
    </div>
    // </Provider>
  );
}

export default App;
