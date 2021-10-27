import React from 'react'



export default function Predictions({pred}) {
    return (
        <div className="center mt4 mb5 f3 " style={{textAlign:'center'}}>
            <li>
                <ul>{`First Prediction: ${pred[0]["className"]}`}</ul>
                <ul>{`Second Prediction: ${pred[1]["className"]}`}</ul>
                <ul><p>{"Third Prediction: "}<span>{pred[2]["className"]}</span></p></ul>
            </li>
        </div>
    )
}
