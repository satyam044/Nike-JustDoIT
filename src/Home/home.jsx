import React, { useRef } from 'react';
import './home.css';
import { BsPlayCircle } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import nikeLogo from '../Assets/NikeLogo.png';
import nikeShoes1 from '../Assets/NikeShoes1.png';
import nikeShoes2 from '../Assets/NikeShoes2.png';
import nikeShoes3 from '../Assets/NikeShoes3.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const bottomMRef = useRef();

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".home",
            start: "top 15%",
            end: "+=200%",
            pin: true,
            scrub: 1,
        });

        ScrollTrigger.create({
            trigger: ".home",
            start: "top 15%",
            end: "+=200%",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                if (progress < 0.33) {
                    gsap.to(".homeImg", { x: '110%' });
                    bottomMRef.current.children[0].classList.add('active');
                    bottomMRef.current.children[1].classList.remove('active');
                    bottomMRef.current.children[2].classList.remove('active');
                } else if (progress < 0.66) {
                    gsap.to(".homeImg", { x: '-160%' });
                    bottomMRef.current.children[0].classList.remove('active');
                    bottomMRef.current.children[1].classList.add('active');
                    bottomMRef.current.children[2].classList.remove('active');
                } else {
                    gsap.to(".homeImg", { x: '-420%' });
                    bottomMRef.current.children[0].classList.remove('active');
                    bottomMRef.current.children[1].classList.remove('active');
                    bottomMRef.current.children[2].classList.add('active');
                }
            },
        });
    });

    return (
        <>
            <div className="home">
                <div className="homeBg">
                    <img src={nikeLogo} alt="Nike Logo" />
                    <div className="homeBgTxt">
                        <div className="homeBgL">Nike</div>
                        <div className="homeBgR">JUST <br /> DO <br /> IT.</div>
                        
                    </div>
                </div>
                <div className="homeShoes">
                    <img src={nikeShoes1} className='homeImg' alt="Nike Shoes 1" />
                    <img src={nikeShoes2} className='homeImg' alt="Nike Shoes 2" />
                    <img src={nikeShoes3} className='homeImg' alt="Nike Shoes 3" />
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
                    <div className="bottomM" ref={bottomMRef}>
                        <h2 className='non-active'>01</h2>
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
    );
};

export default Home;