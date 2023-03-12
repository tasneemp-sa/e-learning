import React, { useEffect } from "react";
import "./Courses.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  fetchAllSubCategoryCourses,
  selectSubCourses,
} from "../../reducers/allCoursesPageSlice";
import { useNavigate } from "react-router-dom";
import {me} from '../../reducers/auth'
import withRouter from "../../withRouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  const { subCategoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector(selectSubCourses);

  useEffect(() => {
    async function getSubCourses() {
      await dispatch(fetchAllSubCategoryCourses(parseInt(subCategoryId)));
    }
    getSubCourses();
  }, [dispatch]);

  return (
    <div className="container mt-0 pt-0">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{courses && courses.length ? `${courses[0]["course_sub_category"]["course_sub_cat_name"]}`: "Loading"}</h1>
            <p className="lead text-muted">
            {courses && courses.length ? `${courses[0]["course_sub_category"]["course_sub_cat_description"]}`: "Loading"}
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">
                Main call to action
              </a>
              <a href="#" className="btn btn-secondary my-2">
                Secondary action
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {courses && courses.length
            ? courses.map((course) => {
                return (
                  
                    <div className="col" key={course.id}>
                      <div className="card shadow-sm">
                        <img
                          className="bd-placeholder-img card-img-top"
                          src={course.thumbnail}
                          width="100%"
                          height="400"
                          alt=""
                        />
                        <div className="card-body">
                          <p className="card-text">
                            {course.course_name}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">

                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => {navigate(`/courses/${course.id}`)}}
                              >
                                View
                              </button>
                            </div>
                            <small className="text-muted">{course.time_to_complete}</small>
                            <strong className="d-inline-block mb-2 text-primary">
                            {course.type === "book" ? (
                              <FontAwesomeIcon icon={faBookOpen} />
                            ) : (
                              <FontAwesomeIcon icon={faVideoCamera} />
                            )}
                          </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                );
              })
            : "Loading"}
            </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
    isLoggedin: !!state.auth.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};
export default withRouter(connect(mapState, mapDispatch)(Courses));

// export default Courses;
