import "../CSS/Home.css";

export default function Home({ dataArr }) {
    return (
        <>
            {dataArr.map((obj, idx) => {
                return (
                <>
                    <p id={idx} >{obj.name}</p>
                    <img className="player-image" id={idx} src={`${obj.name}.png`}/>
                </>
                )
            })}
        </>
    )
}