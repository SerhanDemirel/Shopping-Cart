import React from "react";

const Card = ({ name, image, description, price, onAdd }) => {
  return (
    <section className="card-container">
      <section className="card">
        <img className="card-image" src={image} />
        <div className="card-details">
          <section className="card-price">
            <div className="price">{price}$</div>
          </section>
          <section className="product-detail">{name}</section>
        </div>
        <div>
          <button
            className="card-add"
            onClick={(e) => {
              e.stopPropagation();
              if (onAdd) onAdd();
            }}
          >
            Add to cart
          </button>
        </div>
      </section>
    </section>
  );
};

export default Card;
