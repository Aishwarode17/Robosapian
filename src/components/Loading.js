import React from 'react'

export default function Loading(props) {

    if(props.make === false){
        return (
            <div>
                <p className="f3 center mt4 mb6" style={{textAlign:'center'}}>Your predictions will be shown here</p>
            </div>
        )
    }
    else if(props.make === "loading"){
        return(
            <div>
                <p className="f3 center mt4 mb6" style={{textAlign:'center'}}>Please wait while we make predictions. It may take a few seconds (depends on your network speed). Do not reload or press detect button again.</p>
            </div>
        )
    }
    else{
        return (
            <div>
                {props.children}
            </div>
        )
    }
}
