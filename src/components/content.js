import React from "react";
import { useSpring, animated } from "react-spring";

function Content({currentType}){

    //useSpring hook used to fade in content
    const fadeIn = useSpring({
        opacity: 1,

        from: {
            opacity: 0
        },
        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },

        reset: true
    })
    return(
        <div>
            {currentType.map((data) => (
                    <animated.div key={data.id} className="content-container" style={fadeIn}>
                        <div className="description">
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
                        </div>

                        <div className="content-logos">
                            <img src={data.logoOne}/>
                            <img src={data.logoTwo}/>
                            <img src={data.logoThree}/>
                        </div>
                    </animated.div>
                ))}
        </div>
    );
}

export default Content;