import React, { useEffect } from "react";
import Ratings from "../Ratings";
import "./Popular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCoursesPage, selectAllCourses } from "../../reducers/allCoursesPageSlice";
import { useNavigate } from "react-router-dom";

const Popular = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let courses = useSelector(selectAllCourses);

  courses = courses.slice(0, 3);

  useEffect(() => {
    async function getCourses () {
      await dispatch(fetchAllCoursesPage())
    }
    getCourses();
  }, [dispatch]);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <h4 className="text">Popular Videos and Books</h4>
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
                        <p className="card-text">{course.course_name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => {
                                navigate(`/courses/${course.id}`);
                              }}
                            >
                              View
                            </button>
                          </div>
                          <small className="text-muted">
                            {course.time_to_complete}
                          </small>
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
  );
};

export default Popular;
