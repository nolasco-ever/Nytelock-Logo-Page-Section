import React from "react";

//import components
import logo from '../logo.png';
import search from '../search.png';
import quote from '../quote.png';
import YellowButton from "./yellowButton";

function Header(){
    return(
        <header>
            <img src={logo}/>

            <div className="buttons-container">
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Portfolio</button>
                <button>Blog</button>
                <button>Content</button>
            </div>

            <YellowButton
                text="Get a Quote"
                image={quote}
            />

            <div className="search-container">
                <img src={search}/>
            </div>
        </header>
    );
}

export default Header;