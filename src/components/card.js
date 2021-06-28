import React from  "react";

function Card({id, icon, name, setCurrentType, content}){
    //clear currentType state and then add the chosen information to the state
    //Also change the card style to show it is selected
    function updateData(id){

        setCurrentType([]);

        for(let i = 0; i < content.length; i++){
            if(content[i].id === id){
                setCurrentType([
                {
                id: content[i].id,
                name: content[i].name,
                description: content[i].description,
                logoOne: content[i].logoOne,
                logoTwo: content[i].logoTwo,
                logoThree: content[i].logoThree
                }])
            }
        }
    }

    return(
        <div className="card" id={id} onClick={() => updateData(id)}>
            <div className="image-container" id={id + "image"}>
                <img src={icon}/>
            </div>
            <p>{name}</p>
        </div>
    );
}

export default Card;