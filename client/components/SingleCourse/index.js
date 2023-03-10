import React, { useEffect } from "react";
import "./SingleCourse.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  fetchSingleCourse,
  selectSingleCourse,
} from "../../reducers/singleCoursePageSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"; 
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons"; 
import { fetchAllSubCategoryCourses, selectSubCourses } from "../../reducers/allCoursesPageSlice";
import withRouter from "../../withRouter";
import {me} from '../../reducers/auth'
import { getLoggedInUserId, postUserHistory } from "../../reducers/userHistorySlice";

const SingleCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseDetails = useSelector(selectSingleCourse);

  useEffect(() => {
    async function getCourseDetails() {
      await dispatch(fetchSingleCourse(id));
    }
    getCourseDetails();
  }, [dispatch]);

  // async function handleStartBook(e) {
  //   if (window.localStorage.getItem("token")) {
  //     let userId = await dispatch(getLoggedInUserId())
  //     await dispatch(postUserHistory({userId: userId.payload, courseId: id}))
  //   }
  //   navigate(`/reader/${courseDetails.book.id}`)
    
  // }

  // async function handleStartVideo() {
  //   if (window.localStorage.getItem("token")) {
  //     let userId = await dispatch(getLoggedInUserId())
  //     await dispatch(postUserHistory({userId: userId.payload, courseId: id}))
  //   }
  //   navigate(`/video-player/${courseDetails.video.id}`)
    
  // }

  return (
    <div className="container">
      {courseDetails && courseDetails.book !== undefined && courseDetails.course_sub_category !== undefined ? (
        <div className="container pt-3">
          
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
                <Link to={`/courses/${courseDetails.course_sub_category.id}`} className="stretched-link">
                  {courseDetails.course_sub_category.course_sub_cat_name}
                </Link>
              </p>
              <Link to="/courses" className="stretched-link">
                See All Courses
              </Link>

              {courseDetails.type === 'book' ? (
                 <a href={`/reader/${courseDetails.book.id}`} className="stretched-link">
                 <button type="button" id="book-btn" className="btn btn-primary btn-lg col-3 mt-3" >Start Course</button>
                    </a> 
              ) : (
                <a href={`/video-player/${courseDetails.video.id}`} className="stretched-link">
                <button type="button" className="btn btn-primary btn-lg col-3 mt-3">Start Course</button>
                  </a>
              )}
               
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

export default withRouter(connect(mapState, mapDispatch)(SingleCourse));
// export default SingleCourse;
