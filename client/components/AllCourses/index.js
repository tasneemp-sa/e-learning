import React, { useEffect } from "react";
import Ratings from "../Ratings";
import "./AllCourses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCoursesPage, selectAllCourses, setFilterBooks, setFilterVideos, set } from "../../reducers/allCoursesPageSlice";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let courses = useSelector(selectAllCourses);

  useEffect(() => {
    async function getCourses () {
      await dispatch(fetchAllCoursesPage())
    }
    getCourses();
  }, [dispatch]);

  function handleFilterVideos() {
    dispatch(setFilterVideos());
  }

  function handleFilterBooks() {
    dispatch(setFilterBooks());
  }

  async function handleFilterAll() {
    await dispatch(fetchAllCoursesPage());
  }

  return (
    <div className="album py-5 bg-light">
      <div className="container">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">All Courses - Sharing the knowledge of innovators</h1>
            <p className="lead text-muted">
            From books to leading tech videos to a groundbreaking online learning platform, we’ve focused on creating the best technical learning content for more than four decades. Your teams can benefit from that experience.
            </p>
            <button onClick={() => handleFilterAll()} className="btn btn-link my-2">
                View All
              </button>
            <p>
              <button onClick={() => handleFilterBooks()} className="btn btn-primary my-2 mx-2">
                Books
              </button>
              <button onClick={() => handleFilterVideos()} className="btn btn-secondary my-2">
                Videos
              </button>
            </p>
          </div>
        </div>
      </section>
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

export default AllCourses;
