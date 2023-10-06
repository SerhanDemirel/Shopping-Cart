import React from 'react'

export default function  ({ handleChange, value, name}) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" ></span>
      {name}
    </label>
  )
}
