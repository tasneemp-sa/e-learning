import React from "react";
import './SingleCourse.css'

const SingleCourse = () => {
  return (
    <div className="container">
      <div class="col-md-6">
      <div class="col-auto d-none d-lg-block">
          <img class="bd-placeholder-img" width="200" height="250" src="http://www.w3.org/2000/svg" />
        </div>
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default SingleCourse;
