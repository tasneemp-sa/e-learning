import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { logout } from "../../reducers/auth";
import withRouter from "../../withRouter";
import {me} from '../../reducers/auth'

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let { user, isLoggedIn, logoutUser } = props;
  const javascriptId = 3;
  const pythonId = 4;
  const ReactId = 7;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {

    async function getUser() {
      await dispatch(me());
    }
    if (window.localStorage.getItem("token") !== undefined) {
      getUser();
    }
  }, [dispatch])

  function handleSubmit (e) {
    e.preventDefault();
    if (e.target.search.value.toLowerCase() === 'javascript') {
      navigate('/subCategories/3');
    }
    else if (e.target.search.value.toLowerCase() === 'python') {
      navigate('/subCategories/4');
    }
    else if (e.target.search.value.toLowerCase() === 'react') {
      navigate('/subCategories/7');
    }
    else if (e.target.search.value.toLowerCase() === 'machine learning') {
      navigate('/subCategories/1');
    }
    e.target.search.value = "";
    
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top bg-light p-3"
        id="nav1"
      >
        <div className="container-fluid">
          <a className="navbar-brand text-primary font-height" href="/home">
            <span className="span-gradient">SKY'S THE LIM</span><span className="text-danger"><strong>IT</strong></span>
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
                        <a className="dropdown-item" href="/subCategories/2">
                          Machine Learning
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/subCategories/2">
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
                        <a className="dropdown-item" href="/subCategories/4">
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
                        <a className="dropdown-item" href="/subCategories/7">
                          React
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search" onSubmit={(e) => {handleSubmit(e)}}>
              <input
                className="form-control me-2"
                name="search"
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
                   <p className="nav-link"> <strong>{`HI, ${user.first_name.toUpperCase()}`}</strong></p>
             
                  </li>
                  <li className="nav-item">
                    <p className="nav-link hover-pointer" onClick={logoutUser}>
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
  return {
    user: state.auth,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    logoutUser() {
      dispatch(logout());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Navbar));
