import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { graphql } from "gatsby";
import Footer from "../components/footer";

interface tipe {
  nodes: {
    [x: string]: any;
    id: string;
    tittle: string;
    desc: string;
    image: any;
  };
}
interface Props {
  data: {
    allBenefitYaml: tipe;
    allFacilityYaml: tipe;
  };
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const benefit = data.allBenefitYaml.nodes;
  const facility = data.allFacilityYaml.nodes;

  return (
    <>
      <Navbar />
      <header className='h-96 bg-scale-down md:bg-contain bg-fixed bg-top header-img'>
        <div
          className='flex items-center justify-center h-96
                      font-bold text-4xl text-white text-center
                     bg-black bg-opacity-30 bg-cover backdrop-blur-sm'
        >
          Tempatnya Rental Motor Jogja
        </div>
      </header>
      <Layout>
        <section className='py-8 '>
          <div>
            <h2 className='font-bold text-5xl text-blue-700 text-center'>
              Kenapa Harus Rental di Tempat Kami?
            </h2>
          </div>
        </section>
        <section className='flex flex-row p-4 justify-center'>
          {benefit.map(
            (benefits: {
              id: any;
              image: any;
              title: string;
              description: string;
            }) => (
              <div
                className='flex flex-col items-center w-3/12 mx-8'
                key={benefits.id}
              >
                <div>
                  <img
                    className='object-fill max-w-72 max-h-72 rounded'
                    src={benefits.image}
                    alt={benefits.title}
                  />
                </div>
                <div className='text-center'>
                  <h3 className='font-bold text-lg mt-3 mb-1'>
                    {benefits.title}
                  </h3>
                  <p>{benefits.description}</p>
                </div>
              </div>
            )
          )}
        </section>
        <section className='mt-52 py-8'>
          <div>
            <h2 className='font-bold text-5xl text-blue-700 text-center'>
              Fasilitas Rental
            </h2>
          </div>
        </section>
        <section className='flex flex-row p-4 justify-center'>
          {facility.map(
            (facility: {
              id: any;
              image: any;
              title: string;
              description: string;
            }) => (
              <div
                className='flex flex-col items-center w-3/12 mx-8'
                key={facility.id}
              >
                <div>
                  <img
                    className='object-fill max-w-72 max-h-72 rounded'
                    src={facility.image}
                    alt={facility.title}
                  />
                </div>
                <div className='text-center'>
                  <h3 className='font-bold text-lg mt-3 mb-1'>
                    {facility.title}
                  </h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            )
          )}
        </section>
        <section className='mt-52 py-8'>
          <div>
            <h2 className='font-bold text-5xl text-blue-700 text-center'>
              Banyak Pelanggan yang Puas!
            </h2>
          </div>
          <div className='items-center text-center'>slide show disini</div>
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query content {
    allBenefitYaml {
      nodes {
        id
        title
        description
        image
      }
    }
    allFacilityYaml {
      nodes {
        id
        title
        description
        image
      }
    }
  }
`;
