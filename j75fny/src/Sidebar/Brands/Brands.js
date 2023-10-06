import React from "react";
import "./Brands.css";
import Input from "../../component/Input";

function Brands({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div className="sidebar-div">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Old to new"
          title="Old to new"
          name="Lamborghini"
        />
        <Input
          handleChange={handleChange}
          value="New to old"
          title="New to old"
          name="Smart"
        />
        <Input
          handleChange={handleChange}
          value="Price hight to low"
          title="Price low to low"
          name="Ferrari"
        />
        <Input
          handleChange={handleChange}
          value="Price low to High"
          title="Price low to High"
          name="Volkswagen"
        />
        <Input
          handleChange={handleChange}
          value="Price low to High"
          title="Price low to High"
          name="Mercedes Benz"
        />
        <Input
          handleChange={handleChange}
          value="Price low to High"
          title="Price low to High"
          name="Tesla"
        />
        <Input
          handleChange={handleChange}
          value="Price low to High"
          title="Price low to High"
          name="Fiat"
        />
        <Input
          handleChange={handleChange}
          value="Price low to High"
          title="Price low to High"
          name="Volkswagen"
        />
      </div>
    </div>
  );
}

export default Brands;
