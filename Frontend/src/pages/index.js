import * as React from "react";

// import "../style/index.css";
import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./home";
import Contact from "./contact";

function App() {
  // const potCounter = useSelector(state => state.counter);
  return (
    <div className='app-container'>
      <Header />
      <h1 style={{ size: 24 }}>Concrete Pot h1 index</h1>
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
