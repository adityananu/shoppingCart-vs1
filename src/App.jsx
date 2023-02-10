import React from "react";
import Body from "./components/Body";
import Footer from "./components/footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <>
      <Header /> 
      <div className="tobe">
      <Sidebar />
      <Body />
      </div>
      <Footer />
    </>
  );
};

export default App;