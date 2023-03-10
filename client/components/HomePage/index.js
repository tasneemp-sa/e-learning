import React from "react";

// Import our custom CSS
import "./HomePage.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Popular from "../Popular";
import RecentlyAdded from "../RecentlyAdded";

const HomePage = () => {
  return (
    <div className="container">
        <div class="row mb-2">
      <div class="col-md-8">
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
          <div class="col-auto d-none d-lg-block">
          </div>
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

      {/* Courses */}
      <div className="p-4 p-md-5 mb-4 rounded text-bg-dark bg-gradient">
      <div class="row mb-2">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">Courses</h1>
          <p className="lead my-3">
            Whether you're developing foundational skills for the most in-demand
            roles or deepening your knowledge of the latest tech disciplines,
            make sure to revist your recommended set of courses. We've made it
            easy.
          </p>
        </div>

        <div class="col-md-4 float-end ms-auto">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-auto d-none d-lg-block">
          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">
              Your History
            </strong>
            <h3 class="mb-0">React Fundamentals</h3>
            <div class="mb-1 text-muted">Mar 10</div>
            <div class="mb-1 text-muted">Mar 10</div>
            <p class="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="lead mb-0">
          <a href="#" className="text-white fw-bold">
            Build Your Skills...
          </a>
        </p>
          </div>
        </div>
      </div>

      </div>
      </div>

      <Popular/>
      <RecentlyAdded/>
    </div>
  );
};

export default HomePage;
