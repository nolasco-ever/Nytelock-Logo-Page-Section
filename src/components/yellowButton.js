import React from "react";

function YellowButton({text, image}){
    return(
        <button className="yellow-button">
            <p>{text}</p>
            <div>
                <img src={image}/>
            </div>
        </button>
    );
}

export default YellowButton;