import React from "react";
import ReactDOM from "react-dom/client";
import Header from './Component/Header/Header'
import Body from './Component/Body/Body'
import Footer from './Component/Footer/Footer'

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
