import React from "react";

// Import our custom CSS
import "./HomePage.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Popular from "../Popular";
import RecentlyAdded from "../RecentlyAdded";
import withRouter from "../../withRouter";
import { me } from "../../reducers/auth";
import { connect } from "react-redux";

const HomePage = (props) => {
  let { isLoggedIn } = props;
  return (
    <div className="container">
      {isLoggedIn ? (
        <div class="row mb-2 mt-3">
          <div class="col-md-8 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-none d-lg-block">
                <img
                  className="img-fluid"
                  width="400"
                  height="250"
                  src="./machine-learning.jpeg"
                  alt=""
                />
              </div>
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">
                  On Our Radar
                </strong>
                <h3 class="mb-0">Machine Learning</h3>
                <div class="mb-1 text-muted">Mar 10</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  See Courses
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-none d-lg-block"></div>
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">
                  Your History
                </strong>
                <h3 class="mb-0">React Fundamentals</h3>
                <div class="mb-1 text-muted">Mar 10</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  See All
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div class="col-md-6 p-lg-6 mx-auto my-6">
            <h1 class="display-4 fw-normal">
              The <span className="span-gradient">learning platform</span> you
              need to stay ahead
            </h1>
            <p class="lead fw-normal">
              Pick the role you have (or the role you want) and we’ll guide you
              to the top on-demand courses to learn the technologies and skills
              you need to succeed.
            </p>
            <a class="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"><img src="./luminous.jpeg"/></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      )}

      {/* Courses */}
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark bg-gradient">
        <div class="row mb-2">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Courses</h1>
            <p className="lead my-3">
              Whether you're developing foundational skills for the most
              in-demand roles or deepening your knowledge of the latest tech
              disciplines, make sure to revist your recommended set of courses.
              We've made it easy.
            </p>
          </div>

          <div class="col-md-4 float-end ms-auto">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-none d-lg-block"></div>
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Keep Learning With Courses</h3>

                {isLoggedIn ? (
                  <>
                    <p class="card-text mb-auto">
                      We've saved your recommendations so its easy to pick up
                      where you left off.
                    </p>
                    <p className="lead mb-0">
                      <a href="/userHistory/1" className="text-white fw-bold">
                        Go To Your Courses...
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <p class="card-text mb-auto">
                     Quickly find courses to get more proficient in the skills you'd like to improve.
                    </p>
                    <p className="lead mb-0">
                      <a href="/courses" className="text-white fw-bold">
                        Build Your Skills...
                      </a>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popular />
      <RecentlyAdded />
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(HomePage));

// export default HomePage;
