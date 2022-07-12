import React from "react";
import ReactDOM from "react-dom/client";
// import { useSelector, useDispatch } from "react-redux";
import App from "../App";
// import { configureStore } from "@reduxjs/toolkit";
// import allReducers from "../reducers";
// import { Provider } from "react-redux";
// import myApp from "../pages/_app";

// const store = configureStore({
// reducer: allReducers,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// });
// const store = configureStore({ reducer: allReducers });

function Home() {
  return (
    <div className='App'>
      <h1>hello index</h1>
      <App />
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  return {};
};

export default Home;

// if (typeof window !== "undefined") {
//   ReactDOM.createRoot(
//     <Provider>
//       <App />, document.getElementById("root") //{" "}
//     </Provider>
//   );
// }
