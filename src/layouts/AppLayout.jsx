import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/partials/Footer";
import Navbar from "../components/partials/Navbar";
import { useNewsData } from "../hooks/useNewsData";

const AppLayout = () => {
  const data = useNewsData();
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="">
        <Outlet context={data} />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
