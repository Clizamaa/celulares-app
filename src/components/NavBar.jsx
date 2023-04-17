const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark colorNav">
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
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mantenedor
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Equipos</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">SIM</a></li>
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ingresar</a>
        </li>

      </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
