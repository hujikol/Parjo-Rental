import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const DaftarHarga = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <h1>Hi, welcome to daftar harga!</h1>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <title>Daftar Harga</title>
    <meta name='description' content='Daftar harga rental motor jogja' />
  </>
);

export default DaftarHarga;
