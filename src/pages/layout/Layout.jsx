import React from "react";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <div className="bg-black relative">
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
