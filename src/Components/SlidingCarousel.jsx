import "../CSS/SlidingCarousel.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SlidingCarousel({ homeSlides }) {

    const navigate = useNavigate();

    const [ autoPlay, setAutoPlay ] = useState(true);
    const [ currSlide, setCurrSlide ] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            slideRight()
        },2500);
    })

    function slideRight() {
        if (currSlide === homeSlides.length-1) {
            setCurrSlide(0);
        } else {
            setCurrSlide(currSlide+1);
        }
    }
    return (
        <div className="slidingCarousel-container">
            <img className="carousel-image" src={homeSlides[currSlide].url}/>
            <button className="carousel-btn" type="button" onClick={() => navigate("/")}>Create Your Team</button>
        </div>
    )
}