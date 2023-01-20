import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <h1>
          The page you are looking are not found! back to{" "}
          <Link className='text-blue-500 underline' to='/'>
            beranda
          </Link>
        </h1>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
