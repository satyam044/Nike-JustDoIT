import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <div className="Big-footer">
        <div className="f-help">
          <h2>Help</h2>
          <ul>
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Returns</li>
            <li>Payment Options</li>
          </ul>
        </div>
        <div className="f-shoes">
          <h2>Shoes</h2>
          <ul>
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div className="f-clothing">
          <h2>Clothing</h2>
          <ul>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div className="f-company">
          <h2>Company</h2>
          <ul>
            <li>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      <div className="small-footer">
        <div className="f-icons">
          <FaFacebookSquare />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="f-links">
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="f-copyright">Copyright ©️ 2024. All Rights Reserved.</div>
      </div>
    </>
  )
}

export default footer