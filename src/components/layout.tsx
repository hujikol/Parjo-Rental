import * as React from "react";

const Layout = (props: { children: any }) => {
  const children = props.children;
  return (
    <div>
      <main className='container mx-auto my-48 h-full'>{children}</main>
    </div>
  );
};

export default Layout;
