import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import RightNavbar from "../components/layout-component/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
//   console.log(news);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-10/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div>
            <div className="card bg-base-100 shadow-md">
              <figure className="p-4 w-full">
                <img
                  src={news?.image_url}
                  alt="Shoes"
                  className="rounded-sm w-full"
                />
              </figure>
              <div className="card-body text-left justify-start gap-10">
                <h2 className="text-4xl font-extrabold">{news?.title}</h2>
                <p className="items-center align-middle justify-center">{news?.details}</p>
                <div className="card-actions">
                    <Link className="btn btn-neutral rounded-sm w-72" to={`/category/${news?.category_id}`}><FaArrowLeft></FaArrowLeft>All news in this category</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
