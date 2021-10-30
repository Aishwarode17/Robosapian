import React from 'react'
import "./Imagelink.css"


export default function Imagelink({typechange,press,imghandle,placeHolder,value}) {
    return (
        <div className="">
             <p className="f4 line ph2 ba pv1" style={{height:"145px" , overflowY:"scroll"}}>
                {"This is an object detection app."}
                {
                    "Upload image directly from your device , or enter the direct image address (i.e url) in the given box. Then press detect, and wait for this to predict. When entering url than please only enter the direct image address and not the link of the image. If for some reason you can't find the direct image address (mostly when using mobile browsers) , then download the image from the web and upload it here. You can also upload images clicked from your camera over here. It can detect animals, plants, human, insects, places , objects and much more from the entered images. It can even tell you species of the animal uploaded along with it's scientific name."
                }
            </p>
            <div className="center mt2">
                <div className=" pa4 br3 shadow-5 smscr ">
                <input id='pholder' type="text" value={value} onChange={typechange} className="f4 pa2 w-100 center" placeholder={placeHolder} />
                <div className='center w-70'>
                <button onClick={press} className="shadow-1 center w-40 btnd grow f4 link ph3 pv2 white line bg-light-purple">detect</button>
                <input onChange={imghandle} hidden type="file" id="inp" name="image_upload" accept="image/*"></input>
              
                    <label htmlFor="inp" className="imgupload pointer shadow-2 ba b--black center w-40 btnd grow f4 link ph3 pv2 white line bg-light-purple">
                        {"Upload"}
                    </label>
                
                </div>    
                </div>
            </div>

        </div>
    )
}
