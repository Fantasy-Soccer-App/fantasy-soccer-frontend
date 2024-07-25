import "../CSS/Index.css";



export default function Index({ dataArr }) {
    return (
        <>
               {dataArr.map((obj, idx) => {
                return (
                <>
                    <p id={idx} >{obj.name}</p>
                    <div id={idx} className="image-container">
                        <img className="player-image" id={idx} src={`${obj.name}.png`}/>
                    </div>
                </>
                )
            })}
        </>
    )
}