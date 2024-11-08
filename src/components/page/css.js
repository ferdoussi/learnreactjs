import React from "react";
import Header from "../1-header/header";
import Main from "../2-homes/main";
import Footer from "../3-footer/footer";
import { Helmet } from "react-helmet-async";
const Css = () => {
  return (
    <div>
      <Helmet>
        <title>css</title>
      </Helmet>
      <Header />
      css
      <Footer />
    </div>
  );
};

export default Css;
