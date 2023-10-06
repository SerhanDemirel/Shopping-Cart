import Sidebar from "../Sidebar/Sidebar";
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Card from "../component/Card";
import "../index.css";
import { useState } from "react";
import { data } from "../db/data";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const items = [
    { product: "IPhone", price: 334000 },
    { product: "Samsung", price: 15500 },
    { product: "Redmi", price: 13000 },
  ];

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = () => {
    const filter = data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    return filter;
  };

  const paginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData().slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(filteredData().length / itemsPerPage);

  return (
    <div>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <div className="main-content">
        <Recommended />
        <Products productsData={paginatedData()} />
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
