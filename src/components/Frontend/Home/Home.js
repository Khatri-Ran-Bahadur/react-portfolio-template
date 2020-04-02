import React from "react";
import Layout from "../../../hoc/Layout/Layout";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Brands from "./Brands/Brands";
import Services from "./Services/Services";
import Client from "./Clients/Client";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Brands />
      <Services />
      <Client />
    </Layout>
  );
};

export default Home;
