import * as React from "react";
import Navbar from "./navbar";

const Layout = (props: { children: any }) => {
  const children = props.children;
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
