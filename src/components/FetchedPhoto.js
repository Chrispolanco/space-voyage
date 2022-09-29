import React from "react";

const FetchedPhoto = ({photo}) => {
    // if(!photo){
    //     return <h3>Enter Date</h3>
    // }

    return(
        <div>
            <div>
                <div className="photo-title">{photo.title}</div>
            </div>
            <div className="ui hidden divider"></div>
            <img className="ui circular centered large image" src={photo.url} alt={photo.title} />
            <div className="ui hidden divider"></div>
            <div>
                <p className="ui inverted segment">{photo.explanation}</p>
            </div>
        </div>
    )
}
  
export default FetchedPhoto;
