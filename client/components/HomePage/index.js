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
        <div className="row mb-2 mt-3">
          <div className="col-md-8 ">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img
                  className="img-fluid"
                  width="400"
                  height="250"
                  src="./machine-learning.jpeg"
                  alt=""
                />
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  On Our Radar
                </strong>
                <h3 className="mb-0">Machine Learning</h3>
                <div className="mb-1 text-muted">Mar 10</div>
                <p className="card-text mb-auto">
                This content is intended to guide developers new to ML through the beginning stages of their ML journey. You will see that many of the resources use TensorFlow, however, the knowledge is transferable to other machine learning frameworks.
                </p>
                <a href="/subCategories/2" class="stretched-link">
                  See Courses
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block"></div>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  Your History
                </strong>
                <h3 className="mb-0">React-Redux Beginner To Advanced</h3>
                <div className="mb-1 text-muted">Mar 11</div>
                <p className="card-text mb-auto">
                Learn how to use Redux in this full course for beginners. You will learn how to use Redux with ReduxToolkit Library to create an application involving HTTP requests.
                </p>
                <a href="/userHistory/1" className="stretched-link">
                  See All
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light ">
          <div className="col-md-6 p-lg-6 mx-auto my-6">
            <h1 className="display-4 fw-normal">
              The <span className="span-gradient">learning platform</span> you
              need to stay ahead
            </h1>
            <p className="lead fw-normal">
              Pick the role you have (or the role you want) and we’ll guide you
              to the top on-demand courses to learn the technologies and skills
              you need to succeed.
            </p>
            <a className="btn btn-outline-secondary" href="/courses">
              Explore
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"><img src="futuristic.jpg" width="200" height="400"/></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"><img src="futuristic.jpg" width="200" height="400"/></div>
        </div>
        // </div>
      )}

      {/* Courses */}
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark bg-gradient">
        <div className="row mb-2">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Courses</h1>
            <p className="lead my-3">
              Whether you're developing foundational skills for the most
              in-demand roles or deepening your knowledge of the latest tech
              disciplines, make sure to revist your recommended set of courses.
              We've made it easy.
            </p>
          </div>

          <div className="col-md-4 float-end ms-auto">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block"></div>
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Keep Learning With Courses</h3>

                {isLoggedIn ? (
                  <>
                    <p className="card-text mb-auto">
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
                    <p className="card-text mb-auto">
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
