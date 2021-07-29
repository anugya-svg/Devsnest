const Home=({isLogged,setIsLogged})=>{
    function handleClick(){
        setIsLogged(!isLogged)
    }
    return (
        <div>
            <h1>Home</h1>
            <h2>If not logged in can't access ,Profile and Dashboard</h2>
            {(isLogged?
            <button onClick={handleClick}>Logout</button>
            :
            <button onClick={handleClick}>Login</button>)
            }
        </div>
    )
}
export default Home