import React from "react";
import commerce from "../../lib/commerce";

// import ReactDOM from "react-dom/client";
// import { useSelector, useDispatch } from "react-redux";
// import App from "../App";
// import { configureStore } from "@reduxjs/toolkit";
// import allReducers from "../reducers";
// import { Provider } from "react-redux";
// import myApp from "../pages/_app";

// const store = configureStore({
// reducer: allReducers,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// });
// const store = configureStore({ reducer: allReducers });

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <React.Fragment>
      <pre>{JSON.stringify(merchant, null, 2)}</pre>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
      <pre>{JSON.stringify(products, null, 2)}</pre>

      {/* <App /> */}
    </React.Fragment>
  );
}

// ** 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
// function Home() {
//   return (
//     <div className='App'>
//       <h1>hello index</h1>
//       <App />
//     </div>
//   );
// }

// Home.getInitialProps = async (ctx) => {
//   return {};
// };

// export default Home;

// if (typeof window !== "undefined") {
//   ReactDOM.createRoot(
//     <Provider>
//       <App />, document.getElementById("root") //{" "}
//     </Provider>
//   );
// }
