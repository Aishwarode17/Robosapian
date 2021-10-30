import React from 'react'

export default function Errorboundary(props) {
    
    if(props.haserror){
    return(
        <div>
        <p className="f3 ba mt4 center pa2" style={{textAlign:'center', overflowY:"scroll", height:"300px"}}>
            This error is occured either because of Cross-Origin-Resource-Sharing ( a browser security feature ), or because you've pressed detect, without uploading an image or entering a url. If it's because you didn't entered or didn't upload anything, then please reload and try again ( this time upload or enter an image address). In case you entered the correct image address (not the image link), and this error came up, well, CORS is most likely the cause. Now until I add a proxy server (which is under construction) , Please reload and upload that image, from your device, instead of entering it's url. Reload , try again and have fun. Connect with me on github (link's at the top).
        </p>
        </div>
      )
    }
    else{return(
        <div>
             {props.children}
        </div>
    )
    }
}
