import React from "react";

//import components
import YellowButton from "./yellowButton";
import Card from "./card";
import arrow from '../arrow.png';

function Main({logoTypes, setCurrentType, content}){
    return(
        <div className="main-div">
            <div className="header-container">
                <li>HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?</li>

                <div className="header-sub-container">
                    <h1>Different Types of Logo Styles</h1>
                    <YellowButton
                        text="Contact Us"
                        image={arrow}
                    />
                </div>
            </div>

            <div className="cards-container">
                {logoTypes.map((type, index) => (
                    <Card
                        key={index}
                        id={type.id}
                        icon={type.icon}
                        name={type.name}
                        setCurrentType={setCurrentType}
                        content={content}
                    />
                ))}
            </div>
        </div>
    );
}

export default Main;