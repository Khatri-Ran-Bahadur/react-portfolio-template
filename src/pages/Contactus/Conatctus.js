import React from "react";
import Layout from "../../hoc/Layout/Layout";
import PageHeader from "../../components/Common/PageHeader";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Conatctus = () => {
  return (
    <Layout>
      <PageHeader title="Contact us" />
      <ContactForm />
      <Map />
    </Layout>
  );
};

export default Conatctus;
