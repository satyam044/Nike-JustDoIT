import React from 'react'
import './vc.css'
import card1 from '../../Assets/Card1.avif'
import card2 from '../../Assets/Card2.avif'
import card3 from '../../Assets/Card3.avif'
import Lego from '../../Assets/Lego.mp4'
import Kobe from '../../Assets/Kobe.mp4'
import Pegasus from '../../Assets/Pegasus 41.mp4'

const vc = () => {
    return (
        <>
            <div className="featured">
                <h2>Featured</h2>
                <div className="cards">
                    <div className="card">
                        <img src={card1} className='front' />
                        <video src={Lego} className='back' autoPlay muted loop></video>
                        <div className="f-txt">Nike X Lego</div>
                    </div>
                    <div className="card">
                        <img src={card2} className='front' />
                        <video src={Pegasus} className='back' autoPlay muted loop></video>
                        <div className="f-txt">Pegasus 41</div>
                    </div>
                    <div className="card">
                        <img src={card3} className='front' />
                        <video src={Kobe} className='back' autoPlay muted loop></video>
                        <div className="f-txt">Kobe</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default vc