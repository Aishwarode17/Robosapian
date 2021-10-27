import React from 'react'
import "./Imagelink.css"

export default function Imagelink({typechange,press}) {
    return (
        <div className="">
             <p className="f4 line ph2 ba pv1" style={{height:"180px" , overflowY:"scroll"}}>
                {"This is an object detection app."}
                {"Please enter the direct image address and not the image link below. Also , some images can't be loaded on browsers directly, because of CROSS ORIGIN RESOURCE SHARING policy. So, in rare cases if this happens in your browser, Reload the page. Also if you're viewing this on a mobile device, and have an image you want to use in here, then download that image on your mobile if you not already have it. Afterwards, upload that image on  IMGBB.COM . Than , select HTML FULL INKED option in the embedded codes (you will see it there). Now , after selecting it, you will see an <a> tag (html anchor tag). Inside this <a> tag you will find an <img> tag. At last, copy the url of the image which is the value of the SRC attribute. You now have the direct address of the image which you can paste below and see what this detects. Also do not enter url inside double quotes (\"\"). Only enter clean direct image address/url. Also if you press detect without any url , then also an error will arise . You need to reload the page at that case also. "}
            </p>
            <div className="center mt2">
                <div className="center pa4 br3 shadow-5 smscr ">
                <input type="text" onChange={typechange} className="f4 pa2 w-70 center" placeholder="enter url" />
                <button onClick={press} className="center w-30 btnd grow f4 link ph3 pv2 white line bg-light-purple">detect</button>
                </div>
                
            </div>
        </div>
    )
}
