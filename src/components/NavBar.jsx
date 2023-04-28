import { Outlet, NavLink } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark colorNav container">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img
              src="https://s3.amazonaws.com/gobcl-prod/images/gob-footer.svg"
              alt="Gob.cl"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mantenedor
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/registercell">
                      Equipos
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/registersim">
                      SIM
                    </NavLink>
                  </li>
                  {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="dropdown-item linkraiz mt-2 mx-4" to="/">
                  Ingresar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
