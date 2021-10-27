import Particles from 'react-particles-js';

import React from 'react'

export default function Partistl() {
    return (
        <div>
            <Particles 
            style={{position:"fixed",top:"0px",bottom:'0px',left:'0px',right:'0px',zIndex:'-3'}}
              params={{
                "particles": {
                    "number": {
                        "value": 40
                    },
                    "size": {
                        "value": 2
                    }
                }
              }} />
        </div>
    )
}
