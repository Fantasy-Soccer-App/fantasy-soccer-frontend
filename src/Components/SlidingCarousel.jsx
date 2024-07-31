import "../CSS/SlidingCarousel.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default  function SlidingCarousel() {
    const navigate = useNavigate();

    const slides = [
        { url: "image1.jpeg", title: "first image"},
        { url: "image2.jpeg", title: "second image" },
        { url: "image3.jpeg", title: "third image" }
    ]

    const [ currIndex, setCurrentIndex ] = useState(0); 

    useEffect(() => {
        setTimeout(() => {
            slideRight();
        }, 2500)
    })

    function slideRight() {
        if (currIndex === slides.length-1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currIndex+1);
        }
    }
    return (
        <div className="slidingCarousel-container">
            <div className="opacity-container">
                <img className="carousel-image" src={slides[currIndex].url}/>
                <p className="sliding-carousel-text">Welcome to the world of soccer... <br></br><span className="cheat">---------</span>Ready to dive in?</p>
                <button className="sliding-carousel-btn" type="button" onClick={() => navigate("/myteam")}>Create Your Team</button>
            </div>
        </div>
    )
}