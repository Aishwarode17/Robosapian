import React from 'react'

export default function Navbar() {
    return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p className="f3 pv2 mr2 mv2 link underline dim black pointer"><a className="black f3" href="https://github.com/Aishwarode17/Robosapian" target="_blank" rel="noreferrer">Github</a></p>            
            <p className="f3 pv2 mr1 mv2 link underline dim black pointer"><a className="black f3" href="https://aishwarode17.github.io/Robosapian">Reload</a></p>            
        </nav>
    )
}
