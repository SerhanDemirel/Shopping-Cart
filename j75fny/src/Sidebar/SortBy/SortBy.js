import React from 'react'
import "./SortBy.css";
import Input from '../../component/Input';

function SortBy({handleChange}) {
  return (
    <div>
    <h2 className="sidebar-title color-title">Sort By</h2>
    <label className="sidebar-label-container">
      <input
         onChange={handleChange}  type="radio"
        value=""
        name="test1"
      />
      <span className="checkmark all"></span>
      All
    </label>

    <Input
      handleChange={handleChange}
      value="black"
      title="Black"
      name="Old to new"
      color="black"
    />

    <Input
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="New to old"
      color="blue"
    />

    <Input
      handleChange={handleChange}
      value="red"
      title="Red"
      name="Price hight to low"
      color="red"
    />

    <Input
      handleChange={handleChange}
      value="green"
      title="Green"
      name="Price low to High"
      color="green"
    />

    <label className="sidebar-label-container">
      <input
        onChange={handleChange}
        type="radio"
        value="white"
        name="test1"
      />
      <span
        className="checkmark"
        style={{ background: "white", border: "2px solid black" }}
      ></span>
      White
    </label>
  </div>
  )
}

export default SortBy