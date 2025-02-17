import React, { useRef } from 'react'
import './home.css'
import { BsPlayCircle } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import nikeLogo from '../Assets/NikeLogo.png'
import nikeShoes1 from '../Assets/NikeShoes1.png'
import nikeShoes2 from '../Assets/NikeShoes2.png'
import nikeShoes3 from '../Assets/NikeShoes3.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const home = () => {

    const homeImgRef = useRef();
    useGSAP(()=>{
        gsap.to(homeImgRef,{
            
        })
    })

    return (
        <>
            <div className="home">
                <div className="homeBg">
                    <img src={nikeLogo} />
                    <div className="homeBgTxt">
                        <div className="homeBgL">NIKE</div>
                        <div className="homeBgR">JUST <br /> DO <br /> IT.</div>
                    </div>
                </div>
                <div className="homeShoes" ref={homeImgRef}>
                    <img src={nikeShoes1} />
                    <img src={nikeShoes2} />
                    <img src={nikeShoes3} />
                </div>
                <div className="homeBottom">
                    <div className="bottomL">
                        <button>
                            <BsPlayCircle />
                            <div>
                                <span>Watch</span>
                                <p>Preview</p>
                            </div>
                        </button>
                    </div>
                    <div className="bottomM">
                        <h2 className='active'>01</h2>
                        <h2 className='non-active'>02</h2>
                        <h2 className='non-active'>03</h2>
                    </div>
                    <div className="bottomR">
                        <FaFacebookSquare />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </>
    )
}

export default home