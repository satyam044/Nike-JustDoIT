import React from 'react'
import './section.css'
import data_product from '../Assets/data'
import Item from '../Components/Item/item'

const kids = () => {
    return (
        <>
            <div className="section">
                <h2>Kids</h2>
                <div className="section-items">
                    {data_product.map((item, i) => {
                        return <Item className="section-item" key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
                    })}
                </div>
                <button>View More {">"}</button>
            </div>
        </>
    )
}

export default kids