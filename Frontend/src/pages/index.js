import * as React from "react";
// import "../style/index.css";
import Home from "./Home";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className='app-container'>
      <h1 style={{ size: 24 }}>Concrete Pot h1 index</h1>
      <Home />
      <ContactUs />
    </div>
  );
}

export default App;
