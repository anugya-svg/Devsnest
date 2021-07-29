import {Link} from 'react-router-dom'
const Navbar=({isLogged,setIsLogged})=>{
return(
<nav className="nav">
    <ul>
        <li>
            <Link to="/" className="link">Home</Link>
        </li>
        <li>
            <Link to="/about" className="link">About</Link>
        </li>
        <li>
            <Link to={isLogged?"/profile":"/"} className="link">Profile</Link>
        </li>
        <li>
            <Link to={isLogged?"/dashboard":"/"} className="link">Dashboard</Link>
        </li>
    </ul>
</nav>
)
}
export default Navbar;