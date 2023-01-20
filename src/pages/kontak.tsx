import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const Kontak = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <h1>Hi, welcome to Kontak!</h1>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <title>Kontak Rental</title>
    <meta name='description' content='Kontak rental motor jogja' />
  </>
);

export default Kontak;
