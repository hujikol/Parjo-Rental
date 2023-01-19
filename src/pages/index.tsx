import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1 className='text-3xl underline text-blue-600'>ello world</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
