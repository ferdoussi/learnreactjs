import React from "react";
import Header from "../1-header/header";
import Main from "../2-homes/main";
import Footer from "../3-footer/footer";
import { Helmet } from "react-helmet-async";
const Javascript = () => {
  return (
    <div>
      <Helmet>
        <title>js</title>
      </Helmet>
      <Header />
      js
      <Footer />
    </div>
  );
};

export default Javascript;
