import React from "react";
import withRouter from "../../withRouter";
import { connect } from "react-redux";
import { me } from "../../reducers/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-solid-svg-icons"; 

const Footer = (props) => {
  const { isLoggedIn } = props;
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <p className="text-muted text-center mx-auto">
        <FontAwesomeIcon icon={faCopyright} /> SKY'S THE LIMIT 2023
        </p>
      </div>
    </footer>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.status === "admin",
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Footer));

// export default Main;
