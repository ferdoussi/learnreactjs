import React from "react";
import Header from "../1-header/header";
import Main from "../2-homes/main";
import Footer from "../3-footer/footer";
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <div>
      <Helmet>
        <title>html</title>
      </Helmet>
      <Header />
      <Main anas="html" />
      <Footer />
    </div>
  );
};

export default Html;
