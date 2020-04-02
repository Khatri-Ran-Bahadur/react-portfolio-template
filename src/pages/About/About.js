import React from "react";
import Layout from "../../hoc/Layout/Layout";
import img from "../../resources/img/about-me.jpg";
import PageHeader from "../../components/Common/PageHeader";
const About = () => {
  return (
    <Layout>
      <PageHeader title="About Us" />

      <div className="container">
        <br />
        <div id="about-page">
          <div className="about-inner center">
            <img src={img} />
            <h1>Ran bahadur kc</h1>
            <h2>Free HTML5 CSS Templates Latest</h2>
            <p>
              146+ are Bootstrap templates that are responsive HTML5
              mobile-ready CSS layouts. All 546+ CSS templates are absolutely
              100% free download to
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
