import React from "react";
// import ReactDOM from "react-dom";
// import { useSelector, useDispatch } from "react-redux";
import App from "../App";
// import { configureStore } from "@reduxjs/toolkit";
// import allReducers from "../reducers";
// import Footer from "../common/footer";
// import { increment, decrement } from "../actions";

// import { Provider } from "react-redux";
// import "../style/index.css";

// const store = configureStore({
// reducer: allReducers,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// });
// const store = configureStore({ reducer: allReducers });
function Home() {
  // const potCounter = useSelector((state) => state.potCounter);
  // const isLogged = useSelector((state) => state.isLogeed);
  // const dispatch = useDispatch();
  // <Provider>
  return (
    <div className='App'>
      <h1>hello</h1>
      <App />
      {/* <h1>Counter:{potCounter}</h1> */}
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      {/* <button onClick={() => dispatch(decrement())}>-</button> */}
      {/* {isLogged ? <h3> Valuables here i should not see</h3> : ""} */}
      {/* <Footer /> */}
    </div>
  );
  // </Provider>;
}

export default Home;
// if (typeof window !== "undefined") {
//   ReactDOM.render(
//     // <Provider store={store}>
//     <App />,
//     document.getElementById("root")
//     // </Provider>
//   );
// }
