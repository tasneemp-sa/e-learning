import React, { useEffect } from "react";
import "./Courses.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllSubCategoryCourses,
  selectSubCourses,
} from "../../reducers/allCoursesPageSlice";
import { useNavigate } from "react-router-dom";

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
    <div className="container">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{courses && courses.length ? `${courses[0]["course_sub_category"]["course_sub_cat_name"]}`: "Loading"}</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
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
                                onClick={() => {navigate(`./courses/${course.id}`)}}
                              >
                                View
                              </button>
                            </div>
                            <small className="text-muted">{course.time_to_complete}</small>
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

export default Courses;
