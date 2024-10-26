import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand bg-body-tertiary">
      <div class="justify-content-center container-fluid">
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;