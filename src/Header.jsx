import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {

    return (
        <nav>
          <ul className="d-flex justify-content-center align-items-center mt-5">
            <li className="mx-3">
              <NavLink to="/events" className={({isActive})=>(isActive? "btn active-btn":"btn")}>Events</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/login" >Login</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/addevent">Ajouter un événement</NavLink>
            </li>
          </ul>
        </nav>
    );
}

export default Header;
