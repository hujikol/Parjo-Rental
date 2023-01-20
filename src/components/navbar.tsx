import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Navbar = () => {
  const urlPath = useLocation().pathname;
  console.log("path:", urlPath);
  const linkStyleDefault = "text-xl hover:opacity-50 text-center mx-4 py-2";
  const linkStyleActive =
    "text-xl border-b-4 md:border-b-8 border-blue-500 text-center mx-4 py-2";

  const [navbar, setNavbar] = React.useState(false);

  return (
    <nav className='sticky w-full bg-white shadow top-0 z-10'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:block'>
            <Link to='/'>
              <h2 className='text-2xl font-bold'>Parjo Rental</h2>
            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-2 md:space-y-0'>
              <li>
                <Link
                  to='/'
                  className={`${
                    urlPath === "/" ? linkStyleActive : linkStyleDefault
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to='/daftar-harga'
                  className={`${
                    urlPath === "/daftar-harga/"
                      ? linkStyleActive
                      : linkStyleDefault
                  }`}
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  to='/ketentuan-rental'
                  className={`${
                    urlPath === "/ketentuan-rental/"
                      ? linkStyleActive
                      : linkStyleDefault
                  }`}
                >
                  Ketentuan Rental
                </Link>
              </li>
              <li>
                <Link
                  to='/kontak'
                  className={`${
                    urlPath === "/kontak/" ? linkStyleActive : linkStyleDefault
                  }`}
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
