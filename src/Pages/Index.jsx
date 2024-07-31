export default function Index({ NavBar, Players, myTeamArr, setMyTeamArr }) {
    return (
        <>
            <Players NavBar={NavBar} myTeamArr={myTeamArr} setMyTeamArr={setMyTeamArr}/>
        </>
    )
}