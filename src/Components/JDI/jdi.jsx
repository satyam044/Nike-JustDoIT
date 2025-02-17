import React from 'react'
import './jdi.css'
import nikeLogo from '../../Assets/NikeLogo.png'

const jdi = () => {
    return (
        <>
            <div className="jdiTxt">
                <img src={nikeLogo} className='jdi' />
                <div className="jdi">NIKE JUST DO IT.</div>
            </div>
        </>
    )
}

export default jdi