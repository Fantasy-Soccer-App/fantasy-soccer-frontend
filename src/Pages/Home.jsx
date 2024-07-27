import SlidingCarousel from "../Components/SlidingCarousel";
import "../CSS/Home.css";

export default function Home({ NavBar }) {
    return (
        <>
        <NavBar/>
        <div className="sliding-carousel-container">
            <SlidingCarousel/>
        </div>
        </>
    )
}