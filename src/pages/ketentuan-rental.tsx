import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const Ketentuan = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <h1>Hi, welcome to Ketentuan!</h1>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <title>Ketentuan Rental</title>
    <meta name='description' content='Ketentuan rental motor jogja' />
  </>
);

export default Ketentuan;
