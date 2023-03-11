
import React, {useEffect, useState} from 'react'
import { ReactReader } from "react-reader"
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function Reader(props) {
  const {courseId} = useParams();
  const dispatch = useDispatch();
// And your own state logic to persist state
const [location, setLocation] = useState(null)
const locationChanged = (epubcifi) => {
  // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
  setLocation(epubcifi)
}

useEffect(() => {
  async function getBookData () {
    await dispatch();
  }
});
return (
  <div style={{ height: "100vh" }}>
    <ReactReader
      location={location}
      locationChanged={locationChanged}
      url="/Books/youdontknowjs_es6andbeyond.epub"
    />
  </div>
)
}


export default Reader;
