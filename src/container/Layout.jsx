import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container__main-home">{children}</main>
    </>
  );
};
export default Layout;

