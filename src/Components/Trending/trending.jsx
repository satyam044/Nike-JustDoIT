import React from 'react'
import './trending.css'
import TrendingImg from '../../Assets/Trending-Banner.jpg'

const trending = () => {
  return (
    <>
      <div className="trending">
        <div className="top">
          <h2>Trending</h2>
          <img src={TrendingImg} />
        </div>
        <div className="bottom">
          <img src={TrendingImg} />
          <img src={TrendingImg} />
        </div>
      </div>
    </>
  )
}

export default trending