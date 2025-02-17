import React from 'react'
import './item.css'

const item = (props) => {
  return (
    <>
      <div className="item">
        <img src={props.image} />
        <h2>{props.name}</h2>
        <p className='item-price'>{props.price} $</p>
        <button className="item-button">Buy Now</button>
      </div>
    </>
  )
}

export default item