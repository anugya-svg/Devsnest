import { useSelector } from "react-redux";
const Navbar=()=>{
  
 
    return (
        <nav className="navbar navbar-expand-lg card fixed-top ">
  <div className="container card-fixed navbar ">
    <a className="navbar-brand" href="/"><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"  /></a>
    
    <div className="search d-none d-sm-flex">
        <input type="text" placeholder="&#xF002; search" className="form-control me-2"/>
        
    </div>
    <div className="navbar">
      <ul className="navbar-nav  ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><i className="bi bi-house-door-fill"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-chat-dots"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-compass"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-heart"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGtnPgQ6PFlikAa3YaQ5kfus0CTAvhIXo1g&usqp=CAU" alt="profile" className="side-bar-img" /></a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}
export default Navbar;