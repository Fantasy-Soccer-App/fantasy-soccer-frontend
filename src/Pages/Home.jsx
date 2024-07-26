import "../CSS/Home.css";
import { useState } from "react"; 

export default function Home({ homeSlides, SlidingCarousel }) {
    return (
        <div className="homepage-container">
            <SlidingCarousel homeSlides={homeSlides}/>
        </div>
    )
}