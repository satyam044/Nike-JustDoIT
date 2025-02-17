import React from 'react'
import './shop.css'
import data_product from '../Assets/data'
import Item from '../Components/Item/item'

const shop = () => {
  return (
    <>
      <div className="shop">
        <h2>Shop</h2>
        <div className="shop-item">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          })}
        </div>
        <button>View More {">"}</button>
      </div>
    </>
  )
}

export default shop