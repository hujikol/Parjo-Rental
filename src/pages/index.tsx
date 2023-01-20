import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <header className='h-96 bg-scale-down md:bg-contain bg-fixed bg-top header-img'>
        <div
          className='flex items-center justify-center h-96
                      font-bold text-4xl text-white
                     bg-black bg-opacity-30 bg-cover backdrop-blur-sm'
        >
          Tempatnya Rental Motor Jogja
        </div>
      </header>
      <Layout>
        <p>sebuah paragraf</p>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
