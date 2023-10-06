import React from "react";
import "./Sidebar.css";
import Model from "./Model/Model";
import Brands from "./Brands/Brands";
import SortBy from "./SortBy/SortBy";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container"></div>
        <SortBy></SortBy>
        <Brands></Brands>
        <Model></Model>
      </section>
    </>
  );
}

export default Sidebar;
