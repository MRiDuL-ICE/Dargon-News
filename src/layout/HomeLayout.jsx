import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-popins">
      <header>
        <Header></Header>
        <section className="w-9/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-9/12 mx-auto py-4">
        <Navbar></Navbar>
      </nav>
      <main className="w-9/12 mx-auto grid md:grid-cols-12 gap-5">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="center col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
