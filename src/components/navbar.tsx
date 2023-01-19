import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Beranda</Link>
        <Link to='/daftar-harga'>Harga</Link>
        <Link to='/ketentuan-rental'>Ketentuan Rental</Link>
        <Link to='/kontak'>Kontak</Link>
      </nav>
    </div>
  );
};

export default Navbar;
