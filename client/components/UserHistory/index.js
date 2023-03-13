import React, { useEffect } from "react";
import withRouter from "../../withRouter";
import { connect, useDispatch, useSelector } from "react-redux";
import { me } from "../../reducers/auth";
import "./userHistory.css";
import {
  fetchUserHistory,
  selectUserHistory,
} from "../../reducers/userHistorySlice";
import { useParams } from "react-router-dom";

const UserHistory = (props) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userHistory = useSelector(selectUserHistory);

  useEffect(() => {
    async function getUserHistory() {
      await dispatch(fetchUserHistory(userId));
    }
    getUserHistory();
  }, [dispatch]);

  const { isLoggedIn } = props;

  return (
    <div className="container mt-3">
      <div class="row mb-2">
      <strong class="d-inline-block mb-2 text-primary">
                  Your History
                </strong>
        {userHistory && userHistory.length ? (
          userHistory.map(history => {
            return (
              <div class="col-md-8">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-auto d-none d-lg-block">
                <img
                  className="img-fluid"
                  width="100"
                  height="200"
                  src={`${history.course.thumbnail}`}
                  alt=""
                />
              </div>
              <div class="col p-4 d-flex flex-column position-static">
                
                <h3 class="mb-0">{history.course.course_name}</h3>
                <div class="mb-1 text-muted">Last Opened: {history.last_opened}</div>
                {/* <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p> */}
                <a href={`/courses/${history.courseId}`} class="stretched-link">
                  See Course
                </a>
              </div>
            </div>
          </div>
            )
          })
          
        ) : (
          "Loading"
        )}
      </div>
    </div>
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

export default withRouter(connect(mapState, mapDispatch)(UserHistory));
