import * as React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Navbar = () => {
  const urlPath = useLocation().pathname;
  console.log("path:", urlPath);
  const linkStyleDefault = "text-xl hover:opacity-50 text-center mx-4 py-2";
  const linkStyleActive =
    "text-xl border-b-4 border-blue-700 text-center mx-4 py-2";

  return (
    <div className='bg-gray-100 sticky w-full top-0 z-10'>
      <nav className='flex justify-end mx-6 pt-3 font-bold'>
        <Link
          to='/'
          className={`${urlPath === "/" ? linkStyleActive : linkStyleDefault}`}
        >
          Beranda
        </Link>
        <Link
          to='/daftar-harga'
          className={`${
            urlPath === "/daftar-harga/" ? linkStyleActive : linkStyleDefault
          }`}
        >
          Harga
        </Link>
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
        <Link
          to='/kontak'
          className={`${
            urlPath === "/kontak/" ? linkStyleActive : linkStyleDefault
          }`}
        >
          Kontak
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
