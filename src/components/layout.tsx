import * as React from "react";

const Layout = (props: { children: any }) => {
  const children = props.children;
  return (
    <div>
      <main className='container mx-auto mt-48 h-screen'>{children}</main>
    </div>
  );
};

export default Layout;
