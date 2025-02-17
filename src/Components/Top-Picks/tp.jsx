import React from 'react'
import './tp.css'
import data_product from '../../Assets/data'
import Item from '../../Components/Item/item'

const tp = () => {
  return (
    <>
      <div className="Top-Picks">
        <h2>Top Picks</h2>
        <div className="tp-items">
          {data_product.map((item, i) => {
            return <Item className="tp-item" key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          })}
        </div>
      </div>
    </>
  )
}

export default tp