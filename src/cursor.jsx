import React from 'react'
import './index.css'
import { useGSAP } from '@gsap/react';

const cursor = () => {
  // const cursorRef = useRef();

  window.onmouseenter(()=>{
    console.log("mouse")
    // useGSAP(()=>{
    //   gsap.to(cursorRef,{
  
    //   })
    // })
  })

  return (
    <div className="cursor" ></div>
  )
}

export default cursor