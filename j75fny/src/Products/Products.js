import React from "react";
import "./Products.css";
import Card from "../component/Card";

import { useNavigate } from "react-router-dom";

function Products({ productsData }) {
  const navigate = useNavigate();

  return (
    <div className="products-data">
      {productsData?.map((x) => (
        <div onClick={() => navigate("/detail/" + x.id)}>
          <Card key={x.id} image={x.image} price={x.price} name={x.name} />
        </div>
      ))}
    </div>
  );
}

export default Products;
