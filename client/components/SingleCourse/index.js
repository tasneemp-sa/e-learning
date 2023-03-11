import React, { useEffect } from "react";
import "./SingleCourse.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleCourse,
  selectSingleCourse,
} from "../../reducers/singleCoursePageSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"; 
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons"; 
import { fetchAllSubCategoryCourses, selectSubCourses } from "../../reducers/allCoursesPageSlice";

const SingleCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const courseDetails = useSelector(selectSingleCourse);
  console.log("courseDetails ", courseDetails);
  console.log("book ", courseDetails.book);
  console.log("course_sub_Category ", courseDetails.course_sub_category);

  useEffect(() => {
    async function getCourseDetails() {
      await dispatch(fetchSingleCourse(id));
    }
    getCourseDetails();
  }, [dispatch]);

  return (
    <div className="container">
      {courseDetails && courseDetails.book !== undefined && courseDetails.course_sub_category !== undefined ? (
        <div className="container">
          
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <img
                className="img-fluid"
                width="300"
                height="400"
                src={courseDetails.thumbnail}
                alt=""
              />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
              {courseDetails.type === "book" ? (
                <FontAwesomeIcon icon={faBookOpen} />
              ) : (
                <FontAwesomeIcon icon={faVideoCamera}/>
              )}
              </strong>
              <h3 className="mb-0">{courseDetails.course_name}</h3>
              <div className="mb-1 text-muted">By {courseDetails.author}</div>
              <p className="card-text mb-2">{courseDetails.time_to_complete}</p>
              <p className="card-text mb-2">Topics:
                <a href={`/courses/${courseDetails.course_sub_category.id}`} className="stretched-link">
                  {courseDetails.course_sub_category.course_sub_cat_name}
                </a>
              </p>
              <a href="#" className="stretched-link">
                See Courses
              </a>
              <a href={`/reader/${courseDetails.book.id}`} className="stretched-link">
              <button type="button" className="btn btn-primary btn-lg col-3 mt-3">Start Course</button>
                </a>
              
            </div>
          </div>
          <h3 className="mb-0">Overview</h3>
          <p className="card-text mb-auto">{courseDetails.overview}</p>
          <h3 className="mb-0 mt-2">Requirements</h3>
          <p className="card-text mb-auto">{courseDetails.meant_for}</p>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default SingleCourse;
