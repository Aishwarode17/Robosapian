import React from 'react'
import Tilt from 'react-parallax-tilt';
import "./Logo.css"
import logophoto from "../images/logo.png"

export default function Logo() {
    return (
        <div>
             <Tilt  className="logo br2 shadow-5 pointer"  glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                <div>
                    <img src={logophoto} alt="logo"/>
                </div>
             </Tilt>
        </div>
    )
}
