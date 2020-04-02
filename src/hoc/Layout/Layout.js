import React from "react";
import Navbar from "../../components/Frontend/Navbar/Navbar";
import Footer from "../../components/Frontend/Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main className="site-main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
