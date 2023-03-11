import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { logout } from "../../reducers/auth";
import withRouter from "../../withRouter";

const Navbar = (props) => {
  const { user, isLoggedIn, logoutUser } = props;
  const javascriptId = 3;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top bg-light p-3"
        id="nav1"
      >
        <div className="container-fluid">
          <a className="navbar-brand text-primary font-height" href="/home">
            SKY'S THE LIM<span className="text-danger">IT</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#first-dropdown"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Topics
                </a>
                <ul className="dropdown-menu" id="#first-dropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      ML & AI &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Machine Learning
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Artificial Intelligence
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Programming Languages &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="/subCategories/3">
                          JavaScript
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Python
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Design &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Web Design
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          User Experience
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Libraries &raquo;
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">
                          React
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav ms-auto list-inline">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                   <p className="nav-link"> {`HI, ${user.first_name.toUpperCase()}`}</p>
             
                  </li>
                  <li className="nav-item">
                    <p className="nav-link" onClick={logoutUser}>
                      Log Out
                    </p>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Log In
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapState = (state) => {
  console.log('inside nav !!state.auth.id', state.auth)
  return {
    user: state.auth,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    logoutUser() {
      dispatch(logout());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Navbar));
