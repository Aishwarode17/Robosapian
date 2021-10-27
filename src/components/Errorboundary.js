import React from 'react'

export default function Errorboundary(props) {
    
    if(props.haserror){
    return(
        <div>
        <p className="f3 ba mt4 center pa2" style={{textAlign:'center', overflowY:"scroll", height:"300px"}}>
            This image can't be loaded duef to CORS error, I Aishwar malviya am really sorry about this. In further update I will resolve this error by adding a proxy server, which is under construction. Therefore, for now use a different image. Also Make sure to enter the image address (direct image address). To do so in desktop, go to image and copy image address. And in mobile phone download the image in your mobile, then upload it on imgbb.com , then select "HTML full inked " option from embedded codes. After that an html {"<a>"} tag (anchor tag) will be shown to you. From that tag copy the url inside the "src" attribute of the inner img tag. Than paste that url above. Make sure your url isn't inside any double quote (""). If this doesn't work than try reloading and using a different image with direct address. 
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
